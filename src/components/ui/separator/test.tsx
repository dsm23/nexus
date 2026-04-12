import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import { Separator } from ".";

describe("component", () => {
  describe("Separator", () => {
    it("should render correctly", () => {
      render(<Separator />);

      expect(screen.getByRole("separator")).toBeInTheDocument();
    });
  });
});
