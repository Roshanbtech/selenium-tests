// Create a WebDriver instance, launch Chrome,
// open the application URL, and maximize the window.

const { Builder } = require("selenium-webdriver");

const getDriver = async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com");
    await driver.manage().window().maximize();
    return driver;
};

module.exports = getDriver;
