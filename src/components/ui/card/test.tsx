import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from ".";

describe("component", () => {
  describe("Card", () => {
    it("should render correctly", () => {
      render(
        <Card>
          <CardHeader>
            <CardAction>
              <span>Featured</span>
            </CardAction>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>,
      );

      expect(screen.getByText("Card Title")).toBeInTheDocument();
    });
  });
});
