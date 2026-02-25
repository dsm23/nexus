import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import { FullPageLoader, LoadingSpinner, PageLoader } from ".";

describe("component", () => {
  describe("Loading", () => {
    it("should render correctly", () => {
      const { container } = render(<LoadingSpinner />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("PageLoader", () => {
    it("should render correctly", () => {
      const { container } = render(<PageLoader />);

      expect(container.querySelector("svg")).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("FullPageLoader", () => {
    it("should render correctly", () => {
      const { container } = render(<FullPageLoader />);

      expect(container.querySelector("svg")).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
});
