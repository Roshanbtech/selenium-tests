// Handle dropdown using Select class

const { By } = require("selenium-webdriver");
const { Select } = require("selenium-webdriver/lib/select");
const getDriver = require("../base/driver");

(async function dropdownTest() {

    const driver = await getDriver();

    // Login first
    await driver.findElement(By.id("user-name"))
        .sendKeys("standard_user");
    await driver.findElement(By.id("password"))
        .sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button"))
        .click();

    // Locate dropdown and select value
    let dropdown = await driver.findElement(
        By.className("product_sort_container")
    );

    let select = new Select(dropdown);
    await select.selectByVisibleText("Price (low to high)");

})();
