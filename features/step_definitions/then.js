const { By, until } = require("selenium-webdriver");
const assert = require("assert");
const util = require("util");

module.exports = function () {
  this.When(/^I should see the console$/, function () {
    try {
      this.driver.get("https://dev.laminarflow.io/user/");
      const links = this.driver.findElements(By.className(".MuiButton-label"));
      this.driver.then(console.log(util.inspect(links)));
      this.driver.then(console.log(links));
      this.driver.then(console.log(JSON.stringify(links, null, 2)));
      const entries = Object.entries(links);
      this.driver.then(console.log(util.inspect("entries" + entries)));
      this.driver.then(console.log("entries" + entries));
      this.driver.then(
        console.log("entries" + JSON.stringify(entries, null, 2))
      );

      // links.forEach((link) => {
      //   const linkText = link.getText();
      //   if (linkText) {
      //     assert(
      //       linkText.includes("Laminal"),
      //       `Link ${linkText} does not include ${"Laminal"}`
      //     );
      //   }
      // });
    } catch (e) {
      console.log(e);
      throw e;
    }
  });
};
