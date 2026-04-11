import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "~/test-utils/render";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from ".";

describe("component", () => {
  describe("Alert Dialog", () => {
    it("should render correctly", () => {
      render(
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button>Show Dialog</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>,
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render correctly, after click open", async () => {
      render(
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button>Show Dialog</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>,
      );

      expect(
        screen.queryByText("Are you absolutely sure?"),
      ).not.toBeInTheDocument();

      const button = screen.getByRole("button");
      const user = userEvent.setup();

      await user.click(button);

      await waitFor(() =>
        expect(
          screen.getByText("Are you absolutely sure?"),
        ).toBeInTheDocument(),
      );
    });
  });
});
