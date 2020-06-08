import { Then } from "cucumber";
import assert from "assert";

Then(/^The "(.*)" is displayed$/, (keyword) => {
  if (assert($(keyword).isDisplayed(), `Webpage does not include ${keyword}`));
});

Then(/^We need to write this "(.*)"$/, (keyword) => {
  console.log("We need to write this : " + keyword);
});
