// @ts-check
const { test, expect } = require('@playwright/test');

test('Ticketbox', async ({ page }) => {
  await page.goto('https://ticketbox.vn/');
  await page.getByRole('link', { name: 'Log in | Sign up' }).click();
  await page.getByPlaceholder('Input here').click();
  await page.getByPlaceholder('Input here').fill('0966594120');
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByPlaceholder('Input Password').click();
  await page.getByPlaceholder('Input Password').fill('hh123123');
  await page.getByRole('button', { name: 'Continue' }).click();


  console.log( "=======>", await page.context().cookies() );

  // await page.close();
  await page.pause();
});
