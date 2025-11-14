import { expect, test } from "@playwright/test";



test.describe.only('test Ticket Creation', () => {
    test('Create a new Accountant Ticket', async ({ page }) => {
        await page.goto("https://23e85f52ad08.ngrok-free.app/");
        await page.getByRole('button', { name: 'Companies' }).click();
        
        await page.getByRole('button', { name: 'Create Company' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill('Osome');
        await page.getByRole('button', { name: 'Create' }).click();
        
        await page.getByRole('cell', { name: 'Osome' }).click();
        await page.getByRole('button', { name: 'Create User' }).click();
        await page.getByRole('combobox', { name: 'Role' }).click();
        await page.getByRole('option', { name: 'Accountant' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill('Naufal');
        await page.getByRole('button', { name: 'Create' }).click();
        await expect(page.getByRole('cell', { name: 'accountant' })).toBeVisible();

        await page.getByRole('button', { name: 'Tickets' }).click();
        await page.getByRole('button', { name: 'Create Ticket' }).click();
        await page.getByRole('combobox', { name: 'Company' }).click();
        await page.getByRole('option', { name: 'Osome' }).click();
        await page.getByRole('combobox', { name: 'Type' }).click();
        await page.getByRole('option', { name: 'Management report' }).click();
        await page.getByRole('button', { name: 'Create' }).click();

        await expect(page.getByRole('cell', { name: 'Management Report' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Accounting' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Naufal' })).toBeVisible();
    });
});