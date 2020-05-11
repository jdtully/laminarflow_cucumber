import { Then } from "cucumber";
import assert from "assert";

Then("The user dashboard is displayed", () => {
  const links = $$("#root > div > header > div");
  links.forEach((link) => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(dashboard),
        `Link Text does not include ${"dashboard"}`
      );
    }
  });
});
