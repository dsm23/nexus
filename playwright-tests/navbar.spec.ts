import { expect, test } from "@playwright/test";

test("route to projects", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("link", { name: "Projects" }).click();

  await expect(page).toHaveURL("/projects");
});

test("route to employees", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "People" }).click();

  await page.getByRole("menuitem", { name: "Employees" }).click();

  await expect(page).toHaveURL("/employees");
});

test("route to kudos", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "People" }).click();

  await page.getByRole("menuitem", { name: "Kudos" }).click();

  await expect(page).toHaveURL("/kudos");
});

test("route to announcements", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "People" }).click();

  await page.getByRole("menuitem", { name: "Announcements" }).click();

  await expect(page).toHaveURL("/announcements");
});

test("route to calendar", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "Tools" }).click();

  await page.getByRole("menuitem", { name: "Calendar" }).click();

  await expect(page).toHaveURL("/calendar");
});

test("route to analytics", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "Tools" }).click();

  await page.getByRole("menuitem", { name: "Analytics" }).click();

  await expect(page).toHaveURL("/analytics");
});

test("route to resources", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "Tools" }).click();

  await page.getByRole("menuitem", { name: "Resources" }).click();

  await expect(page).toHaveURL("/resources");
});

test("route to time off", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "Support" }).click();

  await page.getByRole("menuitem", { name: "Time Off" }).click();

  await expect(page).toHaveURL("/time-off");
});

test("route to help desk", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("button", { name: "Support" }).click();

  await page.getByRole("menuitem", { name: "Help Desk" }).click();

  await expect(page).toHaveURL("/help-desk");
});
