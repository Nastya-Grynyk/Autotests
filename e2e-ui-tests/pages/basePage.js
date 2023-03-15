const config = require("../../playwright.config");

exports.BasePage = class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   * @param relativeUrl
   */
  constructor(page, relativeUrl) {
    this.page = page;
    this.relativeUrl = relativeUrl;
  }

  /** Methods */
  async open() {
    await this.page.goto(`${config.default.use.baseUrl}${this.relativeUrl}`);
  }

  /** Assertions */

}