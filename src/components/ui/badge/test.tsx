import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from ".";

describe("component", () => {
  describe("Badge", () => {
    it("should render correctly", () => {
      render(<Badge>Hello, World!</Badge>);

      expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });

    it("should render correctly, asChild", () => {
      render(
        <Badge asChild>
          <a href="#">Hello, World!</a>
        </Badge>,
      );

      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });
});
