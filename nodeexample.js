const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.get("https://dev.laminarflow.io/user");

const buttons = driver.findElement(
  By.xpath("xpath=//a[contains(text(),'Events')]")
);
