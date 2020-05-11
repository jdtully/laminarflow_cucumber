class Login {
  get url() {
    return "/";
  }

  get nameField() {
    return $("#username");
  }
  get passField() {
    return $("#password");
  }

  get loginButton() {
    return $("#kc-login");
  }

  home() {
    this.nameField.waitForDisplayed(10000);
    this.nameField.click();
    this.nameField.setValue(keyword);

    this.passField.click();
    this.passField.setValue(keyword);

    this.loginButton.waitForDisplayed(10000);
    this.loginButton.click();
  }
}
module.exports = new Login();
