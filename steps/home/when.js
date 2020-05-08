import { When } from "cucumber";

When(
  "The user enters the username and  password into the login page and clicks login",
  () => {
    $("username").waitForDisplayed(10000);
    $("username").click();
    $("username").setValue("ctester");

    // $("password").waitForDisplayed(10000);
    // $("password").click();

    // $("password").setValue("w5KjzGVi2jisTc");
    // $("kc_login").click();
  }
);
