// Page Object for Login Page (POM)

const { By } = require("selenium-webdriver");

class LoginPage {

    constructor(driver) {
        this.driver = driver;
    }

    // Locators
    usernameInput = By.id("user-name");
    passwordInput = By.id("password");
    loginButton   = By.id("login-button");

    // Actions
    async open() {
        await this.driver.get("https://www.saucedemo.com/");
    }

    async enterUsername(username) {
        await this.driver.findElement(this.usernameInput)
            .sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.findElement(this.passwordInput)
            .sendKeys(password);
    }

    async clickLogin() {
        await this.driver.findElement(this.loginButton)
            .click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = LoginPage;
