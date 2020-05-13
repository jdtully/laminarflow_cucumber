import { When } from "cucumber";
import links from "../../data/links";

When(/^The user clicks "(.*)"$/, (userNameLink) => {
  $(userNameLink).waitForDisplayed(10000);
  $(userName).click();
});
When(/^The User Clicks "(.*)"/, (keyword) => {
  link = links.links[keyword]["selector"];
  $(link).click();
});
