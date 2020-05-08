import { Given } from "cucumber";
//import goToPage from "../../support/actions/goToPage";

Given("A web browser is at the login page", () => {
  browser.url("/user");
});
