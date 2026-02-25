// Handle iframe by switching control to frame

const { By } = require("selenium-webdriver");
const getDriver = require("../base/driver");

(async function iframeTest() {

    const driver = await getDriver();

    await driver.get(
        "https://the-internet.herokuapp.com/iframe"
    );

    // Switch to iframe
    await driver.switchTo().frame("mce_0_ifr");

    // Perform action inside iframe
    let editor = await driver.findElement(By.id("tinymce"));
    await editor.clear();
    await editor.sendKeys("Hello Selenium");

    // Switch back to main page
    await driver.switchTo().defaultContent();

})();
