import { When } from "cucumber";
//import { credentials } from "../../data/credentials";
require("dotenv").config;

var username = process.env.TEST_USER;
var password = process.env.TEST_PASSWORD;

// When(/^The user puts "(.*)" in the name field$/, () => {
When("The user puts testUser in the name field", () => {
  $("#username").waitForDisplayed(10000);
  $("#username").click();
  $("#username").setValue(username);
});

// When(/^The user puts the "(.*)" password in the password field$/, () => {
When("The user puts the testpassword in the password field", () => {
  $("#password").click();
  $("#password").setValue(password);
});

When("The user clicks login", () => {
  $("#kc-login").waitForDisplayed(5000);
  $("#kc-login").click();
});

When("The user clicks register", () => {
  $("#kc-registration > span > a").waitForDisplayed(10000);
  $("#kc-registration > span > a").click();
});
