import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "~/test-utils/render";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from ".";

describe("component", () => {
  describe("Dialog", () => {
    it("should render correctly", () => {
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>,
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render correctly on click", async () => {
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>,
      );

      expect(
        screen.queryByText("Are you absolutely sure?"),
      ).not.toBeInTheDocument();

      const button = screen.getByRole("button");
      const user = userEvent.setup();

      user.click(button);

      await waitFor(() =>
        expect(
          screen.getByText("Are you absolutely sure?"),
        ).toBeInTheDocument(),
      );
    });
  });
});
