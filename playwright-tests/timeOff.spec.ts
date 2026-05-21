import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/time-off");

  await expect(page).toHaveTitle(/Nexus/v);
});

test("has heading", async ({ page }) => {
  await page.goto("/time-off");

  await expect(
    page.getByRole("heading", {
      name: "Time Off Management",
    }),
  ).toBeVisible();
});

test("route back to dashboard", async ({ page }) => {
  await page.goto("/announcements");

  await page
    .getByRole("link", {
      name: "Back to Dashboard",
    })
    .click();

  await expect(page).toHaveURL("/");
});
