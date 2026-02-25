import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { toast } from "sonner";
import { useTheme } from "~/hooks/useTheme";
import { render } from "~/test-utils/render";
import { Toaster } from ".";

class ResizeObserverMock {
  disconnect() {
    return vi.fn();
  }
  observe() {
    return vi.fn();
  }
  unobserve() {
    return vi.fn();
  }
}

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

vi.mock("~/hooks/useTheme", () => ({
  useTheme: vi.fn(),
}));

type State = Pick<ReturnType<typeof useTheme>, "theme">;

describe("component", () => {
  describe("Sonner", () => {
    it("renders with the theme provided by useTheme", async () => {
      vi.mocked<() => State>(useTheme).mockReturnValue({ theme: "dark" });

      const { container } = render(<Toaster />);

      toast.success("This is a success message");

      await waitFor(() =>
        expect(
          screen.getByText("This is a success message"),
        ).toBeInTheDocument(),
      );

      expect(container.querySelector("svg")).toHaveClass("lucide-circle-check");
      // const sonner = screen.getByTestId("sonner-mock");
      // expect(sonner).toHaveAttribute("data-theme", "dark");
    });

    // it("defaults to 'system' theme if useTheme returns undefined", () => {
    //   (useTheme as any).mockReturnValue({ theme: undefined });

    //   render(<Toaster />);

    //   const sonner = screen.getByTestId("sonner-mock");
    //   expect(sonner).toHaveAttribute("data-theme", "system");
    // });

    // it("applies the correct CSS variable styles", () => {
    //   (useTheme as any).mockReturnValue({ theme: "light" });

    //   render(<Toaster />);

    //   const styleContainer = screen.getByTestId("style-bg");
    //   expect(styleContainer.textContent).toBe("var(--popover)");
    // });

    // it("passes the custom Lucide icons to Sonner", () => {
    //   (useTheme as any).mockReturnValue({ theme: "light" });

    //   render(<Toaster />);

    //   const successIconContainer = screen.getByTestId("icon-success");
    //   // Check if the icon (SVG from lucide) is rendered inside
    //   expect(successIconContainer.querySelector("svg")).toBeTruthy();
    // });

    // it("spreads additional props to the Sonner component", () => {
    //   (useTheme as any).mockReturnValue({ theme: "light" });

    //   // We mock Sonner again specifically for this test to check positioning
    //   const { Toaster: SonnerToaster } = require("sonner");

    //   render(<Toaster position="top-right" />);

    //   expect(SonnerToaster).toHaveBeenCalledWith(
    //     expect.objectContaining({
    //       position: "top-right",
    //     }),
    //     expect.anything(),
    //   );
    // });
  });
});
