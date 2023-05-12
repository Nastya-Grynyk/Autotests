const { BasePage } = require("./basePage");
exports.RegisterPage = class RegisterPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.locator("[placeholder='Full name']");
        this.email = page.locator("[placeholder='Email address']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
        this.signInLink = page.locator("[href='/sign-in']");


    }

    async register(userName, userEmail, userPassword) {
        await this.fullName.type(userName);
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();
    
    }

    async clickSignInLink() {
        await this.signInLink.click();
    }


}