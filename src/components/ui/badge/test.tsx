import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import { Badge } from ".";

describe("component", () => {
  describe("Badge", () => {
    it("should render correctly", () => {
      render(<Badge>Hello, World!</Badge>);

      expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });

    it("should render correctly, render prop", () => {
      render(<Badge render={<a href="#">Hello, World!</a>} />);

      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });
});
