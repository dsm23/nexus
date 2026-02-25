import { describe, expect, it } from "vitest";
import { render } from "~/test-utils/render";
import { Textarea } from ".";

describe("component", () => {
  describe("Textarea", () => {
    it("should render correctly", () => {
      const { container } = render(<Textarea />);

      expect(container.querySelector("textarea")).toBeInTheDocument();
    });
  });
});
