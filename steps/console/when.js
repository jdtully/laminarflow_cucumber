import { When } from "cucumber";

import links from "../../data/links";

When("The user clicks the event button", () => {
  $("#root > div > div.jss1 > div > div > div > div > a").waitForDisplayed(
    10000
  );
  $("#root > div > div.jss1 > div > div > div > div > a").click();
});

When("The user clicks the person icon", () => {
  $("#root > div > header > div > div:nth-child(5) > button").waitForDisplayed(
    5000
  );
  $("#root > div > header > div > div:nth-child(5) > button").click();
});

When("The user can click the new event icon", () => {
  $("/html/body/div[1]/div/div[2]/div/div/div/button").waitForDisplayed(5000);
  $("/html/body/div[1]/div/div[2]/div/div/div/button").click();
});

When("The user clicks the Logout button", () => {
  console.log("Need  to write this");
});
