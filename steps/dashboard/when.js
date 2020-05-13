import { When } from "cucumber";
import links from "../../data/links";

//When(/^The user clicks "(.*)"$/, (userNameLink) => {
//   $(userNameLink).waitForDisplayed(10000);
//   $(userName).click();
// });

When(/^The user clicks "(.*)"/, (keyword) => {
  let link = links.links[keyword]["selector"];
  $(link).waitForDisplayed(100000);
  $(link).click();
});
