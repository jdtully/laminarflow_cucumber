import { When } from "cucumber";

When(/^The user puts "(.*)" in the name field$/, (keyword) => {
  $("#username").waitForDisplayed(10000);
  $("#username").click();
  $("#username").setValue(keyword);
});

When(/^The user puts the "(.*)" password in the password field$/, (keyword) => {
  // $("#password").waitForDisplayed(10000);
  $("#password").click();
  $("#password").setValue(keyword);
});

When("The user clicks login", () => {
  $("#kc-login").waitForDisplayed(5000);
  $("#kc-login").click();
});

When("The user clicks register", () => {
  $("#kc-registration > span > a").waitForDisplayed(10000);
  $("#kc-registration > span > a").click();
});
