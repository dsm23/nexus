import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert, AlertDescription, AlertTitle } from ".";

describe("component", () => {
  describe("Alert", () => {
    it("should render correctly", () => {
      render(
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>,
      );

      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });
});
