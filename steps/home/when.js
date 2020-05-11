import { When } from "cucumber";

// When(/^I put "(.*)" in the name field$/, () => {
//   $("username").waitForDisplayed(100000);
//   $("username").click();
//   $("username").setValue("ctester");
// });
When(/^The user puts "ctester" in the name field$/, () => {
  $("#username").waitForDisplayed(10000);
  $("#username").click();
  $("#username").setValue("ctester");
});

When(/^The user puts "w5KjzGVi2jisTc" in the password field$/, () => {
  $("#password").waitForDisplayed(10000);
  $("#password").click();
  $("#password").setValue("w5KjzGVi2jisTc");
});

When("The user clicks register", () => {
  $("#kc-registration > span > a").waitForDisplayed(10000);
  $("#kc-registration > span > a").click();
});
