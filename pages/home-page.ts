import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    //variables
    readonly page: Page;
    readonly getStartedLink: Locator;

    //consutructor
    constructor (page: Page) {
        this.page = page;
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    }

    //methods
    async clickGetStartedLink() {
        await this.getStartedLink.click();
    }

    async verifyTitle(expected: string) {
        const matcher = new RegExp(expected);
        await expect(this.page).toHaveTitle(matcher);
    }
}

export default HomePage;
