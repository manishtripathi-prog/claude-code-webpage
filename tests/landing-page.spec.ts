import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Landing page", () => {
  test("loads and shows the H1 with the brand name", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Manish Tripathi");
  });

  test("renders the Vision video container", async ({ page }) => {
    await page.goto("/");
    const videoContainer = page.getByTestId("vision-video-container");
    await videoContainer.scrollIntoViewIfNeeded();
    await expect(videoContainer).toBeVisible();
    await expect(page.getByTestId("vision-video")).toHaveCount(1);
  });

  test("mobile menu toggles at 375px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await expect(page.getByTestId("mobile-menu")).toHaveCount(0);
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await expect(page.getByTestId("mobile-menu")).toBeVisible();
  });

  test("primary CTA click scrolls to the contact section", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Book a Strategy Call" }).click();
    const contact = page.locator("#contact");
    await expect(contact).toBeInViewport();
  });

  test("all images have alt attributes", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toHaveAttribute("alt", /.*/);
    }
  });

  test("has no critical automated accessibility violations", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(critical).toEqual([]);
  });
});
