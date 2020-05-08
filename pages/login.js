class Login {
  get url() {
    return "/";
  }

  get nameField() {
    return $("username");
  }
  get passField() {
    return $("password");
  }

  get loginButton() {
    return $("kc_login");
  }

  home() {
    this.nameField.waitForDisplayed(10000);
    this.nameField.click();
    this.nameField.setValue("ctester");

    this.passField.click();
    this.passField.setValue("ctester");

    this.loginButton.waitForDisplayed(10000);
    this.loginButton.click();
  }
}
module.exports = new Login();
