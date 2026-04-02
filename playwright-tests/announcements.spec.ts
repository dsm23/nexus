// import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/announcements");

  await expect(page).toHaveTitle(/Nexus/);
});

test("has heading", async ({ page }) => {
  await page.goto("/announcements");

  await expect(
    page.getByRole("heading", {
      name: "Company Announcements",
    }),
  ).toBeVisible();
});

test("route back to dashboard", async ({ page }) => {
  await page.goto("/announcements");

  await page
    .getByRole("link", {
      name: "Back to Dashboard",
    })
    .click();

  await expect(page).toHaveURL("/");
});

// test("should not have any automatically detectable accessibility issues", async ({
//   page,
// }) => {
//   await page.goto("/");

//   const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

//   expect(accessibilityScanResults.violations).toEqual([]);
// });
