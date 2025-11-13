import { test, expect } from "@playwright/test";
import HomePage from "../pages/home-page";
import TopMenuPage from "../pages/top-menu-page";

const URL = 'https://playwright.dev/';
let homePage: HomePage;
let topMenuPage: TopMenuPage;
let pageUrl = /.*intro/;
let pageUrlJava = /.*java/;

test.beforeEach(async ({ page }) => {
	await page.goto(URL);
	homePage = new HomePage(page);
	topMenuPage = new TopMenuPage(page);
})

async function clickGetStarted() {
	homePage.clickGetStartedLink();
}

test.describe('Playwright Website Tests', () => {
	test('has title', async () => {
		await homePage.verifyTitle("Playwright");
	});

	test('get started link', async ({ page }) => {
		await clickGetStarted();
		await topMenuPage.assertPageUrl(pageUrl);

		await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
	});

	test('check Java Page', async ({ page }) => {
		await test.step('Act', async () => {
			await clickGetStarted();

			await topMenuPage.hoverNode();
      await topMenuPage.clickJava();
		});

		await test.step('Assert', async () => {
			await topMenuPage.assertPageUrl(pageUrlJava);
			await topMenuPage.assertNodeDescriptionNotVisible();
			await topMenuPage.assertJavaDescriptionVisible();
		});
	});
});