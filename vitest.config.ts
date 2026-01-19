import { playwright } from "@vitest/browser-playwright";
import { defineConfig, mergeConfig } from "vitest/config";
import path from "node:path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import viteConfig from "./vite.config";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        include: ["src/**/*.[jt]s?(x)"],
        exclude: [
          "src/**/*.stories.[jt]s?(x)",
          "src/test-utils/**",
          "src/mocks/**",
          "**/*.d.ts",
        ],
        thresholds: {
          lines: 0.1,
          functions: 0.1,
          branches: 0.1,
          statements: 0.1,
        },
      },
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
      globals: false,
      logHeapUsage: true,
      watch: false,
      projects: [
        {
          extends: true,
          test: {
            name: "unit",
            include: ["src/**/?(*.)+(spec|test).[jt]s?(x)"],
          },
        },
        {
          extends: true,
          plugins: [
            // The plugin will run tests for the stories defined in your Storybook config
            // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
            storybookTest({
              configDir: path.join(import.meta.dirname, ".storybook"),
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: playwright(),
              instances: [
                {
                  browser: "chromium",
                },
              ],
            },
            setupFiles: [".storybook/vitest.setup.ts"],
          },
        },
      ],
    },
  }),
);
