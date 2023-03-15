import config from "../../playwright.config";

config.testDir = '../specs';
config.use = {
    headless: false,
    env: 'stage',
    baseUrl: 'http://stage.qa.nolimit.school',
    loginUrl: 'http://stage.qa.nolimit.school/sign-in',
    apiUrl: 'http://stage.qa.nolimit.school/back-office/api',
};

module.exports = config;