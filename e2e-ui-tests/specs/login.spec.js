const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { EditProfilePage } = require('../pages/editProfilePage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let loginPage;
const env = config.default.use.env;


test.describe('Login tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test('Login with valid data', async ({ page }) => {
        await loginPage.login(users[env].user.email, users[env].user.password);
        await expect(page.locator("[class='logo']")).toBeVisible;
    });

});
