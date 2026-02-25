// Handle multiple browser windows

const { By } = require("selenium-webdriver");
const getDriver = require("../base/driver");

(async function windowsTest() {

    const driver = await getDriver();

    await driver.get(
        "https://the-internet.herokuapp.com/windows"
    );

    // Store parent window
    let parentWindow = await driver.getWindowHandle();

    // Open new window
    await driver.findElement(By.linkText("Click Here")).click();

    // Switch to child window
    let windows = await driver.getAllWindowHandles();
    for (let win of windows) {
        if (win !== parentWindow) {
            await driver.switchTo().window(win);
        }
    }

})();
