// use explicit waits to wait until element is available

const { By, until } = require('selenium-webdriver');
const getDriver = require('../base/driver');

(async function waitsTest() {
     const driver = await getDriver();
     // wait until the username field is located and visible
     const usernameField = await driver.wait(
         until.elementLocated(By.id('user-name')),
         10000
     );
     await driver.wait(until.elementIsVisible(usernameField), 10000);
     await usernameField.sendKeys('standard_user');
}) ();