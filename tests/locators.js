// Use locators (ID, Name) to perform login operation.

const { By } = require('selenium-webdriver');
const getDriver = require('../base/driver');

(async function locatorsTest() {
    // get browser instance from driver.js
    const driver = await getDriver();
    // locate username field by ID and enter value
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    // locate password field by Name and enter value
    await driver.findElement(By.name('password')).sendKeys('secret_sauce');
    // locate login button by ID and click
    await driver.findElement(By.id('login-button')).click();
})();
