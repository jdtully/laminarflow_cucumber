import { Then } from "cucumber";
import assert from "assert";

Then("The Registration page is displayed", () => {
  const links = $$("#kc-page-title");
  links.forEach((link) => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes("register"),
        `Link Text does not include ${"register"}`
      );
    }
  });
});
