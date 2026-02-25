// Test file using Mocha (TestNG alternative)

const getDriver = require("../base/driver");
const LoginPage = require("../pages/LoginPage");
const { expect } = require("chai");

describe("Login Test - POM with Mocha", function () {

    this.timeout(20000); // important for Selenium

    let driver;
    let loginPage;

    before(async () => {
        driver = await getDriver();
        loginPage = new LoginPage(driver);
        await loginPage.open();
    });

    it("should login with valid credentials", async () => {
        await loginPage.login(
            "standard_user",
            "secret_sauce"
        );

        const title = await driver.getTitle();
        expect(title).to.include("Swag Labs");
    });

    after(async () => {
        await driver.quit();
    });
});
