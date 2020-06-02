import { Given } from "cucumber";
//import goToPage from "../../support/actions/goToPage";

Given("The App is  on the Console", () => {
  browser.url("https://dev.laminarflow.io/user");
});
