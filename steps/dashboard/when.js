import { When } from "cucumber";

When(/^The user clicks "(.*)"$/, (userNameLink) => {
  $(userNameLink).waitForDisplayed(10000);
  $(userName).click();
});
