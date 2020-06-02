import { Then } from "cucumber";
import assert from "assert";

Then(/^The "(.*)" is displayed$/, (keyword) => {
  const links = $$("#root > div > header > div");
  var keylower = keyword.toLowerCase();
  links.forEach((link) => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keylower),
        `Link Text does not include ${keylower}`
      );
    }
  });
});

Then(/^We need to write this "(.*)"$/, (keyword) => {
  console.log("We need to write this : " + keyword);
});
