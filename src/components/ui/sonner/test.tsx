import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { toast } from "sonner";
import { useTheme } from "~/hooks/useTheme";
import { render } from "~/test-utils/render";
import { Toaster } from ".";

class ResizeObserverMock {
  public disconnect = vi.fn<() => void>();
  public observe = vi.fn<() => void>();
  public unobserve = vi.fn<() => void>();
}

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

vi.mock("~/hooks/useTheme", () => ({
  useTheme: vi.fn<() => { theme: string }>(),
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
    });
  });
});
