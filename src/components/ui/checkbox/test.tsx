import { describe, expect, it, vi } from "vitest";
import { render } from "~/test-utils/render";
import { Checkbox } from ".";

class ResizeObserverMock {
  public disconnect = vi.fn<() => void>();
  public observe = vi.fn<() => void>();
  public unobserve = vi.fn<() => void>();
}

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

describe("component", () => {
  describe("Checkbox", () => {
    it("should render correctly", () => {
      const { container } = render(<Checkbox />);

      expect(container.querySelector("span")).toBeInTheDocument();
      expect(
        container.querySelector('input[type="checkbox"]'),
      ).toBeInTheDocument();
    });
  });

  it("should render in a form correctly", () => {
    const { container } = render(
      <form>
        <Checkbox />
      </form>,
    );

    expect(container.querySelector("span")).toBeInTheDocument();
    expect(
      container.querySelector('input[type="checkbox"]'),
    ).toBeInTheDocument();
  });
});
