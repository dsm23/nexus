import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "~/test-utils/render";
import { Tooltip, TooltipContent, TooltipTrigger } from ".";

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

describe("component", () => {
  describe("Tooltip", () => {
    it("should render correctly", () => {
      render(
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Some content</p>
          </TooltipContent>
        </Tooltip>,
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render correctly on hover", async () => {
      render(
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Some content</p>
          </TooltipContent>
        </Tooltip>,
      );

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      const button = screen.getByRole("button");
      const user = userEvent.setup();

      user.hover(button);

      await waitFor(() =>
        expect(screen.getByRole("tooltip")).toBeInTheDocument(),
      );
    });
  });
});
