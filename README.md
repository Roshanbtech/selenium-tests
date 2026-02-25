# 🧪 Selenium WebDriver Automation Framework (Node.js + Mocha)

## 📌 Project Overview

This project demonstrates **UI Test Automation using Selenium WebDriver with Node.js**.

It covers:

* Browser setup using WebDriver
* Page Object Model (POM) implementation
* Handling alerts
* Handling dropdowns
* Handling iframes
* Using different locators
* Explicit waits
* Handling multiple windows
* Running tests using Mocha + Chai

The sample application used:

* [https://www.saucedemo.com](https://www.saucedemo.com)
* [https://the-internet.herokuapp.com](https://the-internet.herokuapp.com)

---

# 🏗 Project Structure

```
SELENIUM_TEST/
│
├── base/
│   └── driver.js          # WebDriver setup
│
├── pages/
│   └── LoginPage.js       # Page Object Model (POM)
│
├── tests/
│   ├── alert.js
│   ├── dropdown.js
│   ├── iframe.js
│   ├── locators.js
│   ├── login.test.js
│   ├── waits.js
│   └── windows.js
│
├── package.json
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Install Node.js

Download and install:

* Latest Node.js (includes npm)

Verify installation:

```bash
node -v
npm -v
```

---

## 2️⃣ Clone the Project

```bash
git clone <your-repo-url>
cd SELENIUM_TEST
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

Required packages:

```bash
npm install selenium-webdriver
npm install mocha chai --save-dev
```

---

## 4️⃣ Install ChromeDriver

Make sure:

* Google Chrome is installed
* ChromeDriver matches your Chrome version

You can use:

```bash
npm install chromedriver
```

---

# 🚀 How It Works

---

# 1️⃣ WebDriver Setup (`base/driver.js`)

This file:

* Creates a Chrome browser instance
* Opens the application
* Maximizes the window
* Returns the driver instance

```js
const { Builder } = require("selenium-webdriver");

const getDriver = async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com");
    await driver.manage().window().maximize();
    return driver;
};

module.exports = getDriver;
```

Every test imports this driver.

---

# 2️⃣ Page Object Model (POM)

📂 `pages/LoginPage.js`

Instead of writing login code in every test, we created a **LoginPage class**.

It contains:

* Locators
* Actions
* Reusable login method

Example:

```js
async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
}
```

This makes tests:

* Cleaner
* Reusable
* Maintainable

---

# 3️⃣ Mocha Test File

📂 `tests/login.test.js`

Uses:

* `describe()` → Test suite
* `it()` → Test case
* `before()` → Setup
* `after()` → Cleanup
* `chai.expect()` → Assertions

Run test:

```bash
npx mocha tests/login.test.js
```

---

# 🧠 What Each Test Demonstrates

---

## 🔔 alert.js

* Handles JavaScript alert
* Uses `driver.switchTo().alert()`

---

## 📑 dropdown.js

* Uses `Select` class
* Selects dropdown by visible text

---

## 🖼 iframe.js

* Switches into iframe
* Performs action
* Switches back

---

## 🔎 locators.js

* Uses:

  * By.id()
  * By.name()
  * By.className()
  * By.xpath()

---

## ⏳ waits.js

* Uses explicit wait
* `until.elementLocated()`
* `until.elementIsVisible()`

This avoids flaky tests.

---

## 🪟 windows.js

* Handles multiple browser windows
* Uses:

  * `getWindowHandle()`
  * `getAllWindowHandles()`
  * `switchTo().window()`

---

# ▶️ How to Run Tests

### Run Single Test

```bash
node tests/alert.js
```

OR

```bash
npx mocha tests/login.test.js
```

---

### Run All Mocha Tests

Add script in package.json:

```json
"scripts": {
  "test": "mocha tests/*.test.js"
}
```

Then run:

```bash
npm test
```

---

# 🧩 Concepts Used

* Selenium WebDriver
* Async/Await
* Page Object Model
* Explicit Waits
* Mocha Test Framework
* Chai Assertions
* Window Handling
* Iframe Handling
* Alerts Handling

---

# ✅ Why This Framework Is Good

✔ Reusable
✔ Structured
✔ Maintainable
✔ Scalable
✔ Follows Industry POM Pattern

---

# 🔮 How To Improve This Framework

You can enhance it by:

* Adding screenshots on failure
* Adding logging
* Using environment variables
* Using test data files (JSON)
* Adding parallel execution
* Integrating with CI/CD (GitHub Actions)

---

# 📌 Summary

This project demonstrates a **basic but well-structured Selenium Automation Framework** using:

* Node.js
* Selenium WebDriver
* Mocha
* Chai
* Page Object Model

It automates:

* Login functionality
* Alerts
* Dropdowns
* Iframes
* Windows
* Waits
* Locators

---
