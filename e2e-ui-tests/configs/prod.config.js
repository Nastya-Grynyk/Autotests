import config from "../../playwright.config";

config.testDir = '../specs';
config.use = {
    headless: false,
    env: 'prod',
    baseUrl: 'http://prod.qa.nolimit.school',
    loginUrl: 'http://prod.qa.nolimit.school/sign-in',
    apiUrl: 'http://prod.qa.nolimit.school/back-office/api',
};

module.exports = config;