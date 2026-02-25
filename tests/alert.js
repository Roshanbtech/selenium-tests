// Handle JavaScript alert using Alert interface

const { By } = require("selenium-webdriver");
const getDriver = require("../base/driver");

(async function alertTest() {

    const driver = await getDriver();

    await driver.get(
        "https://the-internet.herokuapp.com/javascript_alerts"
    );

    // Click alert button
    await driver.findElement(
        By.xpath("//button[text()='Click for JS Alert']")
    ).click();

    // Switch to alert and accept
    let alert = await driver.switchTo().alert();
    await alert.accept();

})();
