const { test, expect, request } = require('@playwright/test');
const { RegisterPage } = require('../pages/registerPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

    
let registerPage;
const env = config.default.use.env;


test.describe('Rgistration tests', () => {

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.open();
    });

    test.only('Registration with valid data', async ({ page }) => {
        await registerPage.register(userData.generatedFullName, userData.generatedEmail, userData.password);
        //await expect(page.locator("[class='logo']")).toBeVisible;
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

    test('Open Sign In Page from Sign Up', async ({ page }) => {
        await registerPage.clickSignInLink();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });


});
