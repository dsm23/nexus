import { describe, expect, it, vi } from "vitest";
import { render } from "~/test-utils/render";
import { Checkbox } from ".";

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
  describe("Checkbox", () => {
    it("should render correctly", () => {
      const { container } = render(<Checkbox />);

      expect(container.querySelector("button")).toBeInTheDocument();
    });
  });

  it("should render in a form correctly", () => {
    const { container } = render(
      <form>
        <Checkbox />
      </form>,
    );

    expect(
      container.querySelector('input[type="checkbox"]'),
    ).toBeInTheDocument();
  });
});
