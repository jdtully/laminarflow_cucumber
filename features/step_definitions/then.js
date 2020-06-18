const { By, until } = require("selenium-webdriver");

module.exports = function () {
  this.When(/^I should see the console$/, function () {
    try {
      this.driver.wait(
        until.elementLocated(
          By.xpath("/html/body/div[1]/div/div[2]/div/div/nav/ol/li/a")
        ),
        10000,
        "Could not locate the child element within the time specified"
      );
    } catch (e) {
      console.log(e);
      throw e;
    }
  });
};
