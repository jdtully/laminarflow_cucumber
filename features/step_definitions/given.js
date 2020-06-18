module.exports = function () {
  this.Given(/^I visit the laminarflow login page$/, function () {
    return this.driver.get("http://dev.laminarflow.io/user");
  });
};
