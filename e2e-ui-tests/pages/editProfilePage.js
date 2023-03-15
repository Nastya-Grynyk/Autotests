const { BasePage } = require("./basePage");
exports.EditProfilePage = class EditProfilePage extends BasePage {

    constructor(page) {
        super(page, '/vertical/edit-account');
        this.fullName = page.locator("[placeholder='Full name']");
        this.age = page.locator("[placeholder='Age']");
        this.gender = page.locator("[formcontrolname='gender']");
        this.phone = page.locator("[placeholder='Number']");
        this.address = page.locator("[placeholder=' Address']");
        this.saveButton = page.locator("//div[@class='col']/button");
        this.userMenuIcon = page.getByRole('tc-dropdown-button');
    }

    async editFullName(userFullName) {
        await this.clearTextField(this.fullName);
        await this.fullName.type(userFullName);
        await this.page.getByText('Phone number').dblclick();
        await this.saveButton.click();
        await this.page.reload();
    }

    /*async openPageFromMenu() {
        await this.userMenuIcon.click();

    }*/

    async clearTextField(locator) {
        await locator.click();
        await this.page.keyboard.press("Meta+A");
        await this.page.keyboard.press('Backspace');
    }
}