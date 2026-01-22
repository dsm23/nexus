import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Separator } from ".";

describe("component", () => {
  describe("Separator", () => {
    it("should render correctly", () => {
      render(<Separator decorative={false} />);

      expect(screen.getByRole("separator")).toBeInTheDocument();
    });
  });
});
