const { By } = require("selenium-webdriver");

module.exports = function () {
  this.When(/^I enter the username and password$/, function () {
    try {
      this.driver.findElement(By.id("username")).click();
      this.driver.findElement(By.id("username")).sendKeys("ctester");

      this.driver.findElement(By.id("password")).click();
      this.driver.findElement(By.id("password")).sendKeys("Schizz3L!");

      this.driver.findElement(By.id("kc-login")).click();
    } catch (e) {
      console.log(e.stack);
      throw e;
    }
  });
};
