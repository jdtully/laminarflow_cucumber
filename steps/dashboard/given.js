import { Given } from "cucumber";
//import goToPage from "../../support/actions/goToPage";

Given("The App is  on the Dashboard", () => {
  browser.url("https://www.laminarflow.io/user");
});
