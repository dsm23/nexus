import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".";

describe("component", () => {
  describe("Tabs", () => {
    it("should render correctly", () => {
      render(
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>,
      );

      expect(screen.getByRole("tablist")).toBeInTheDocument();
    });
  });
});
