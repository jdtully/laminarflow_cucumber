class home {
  get url() {
    return "/user";
  }

  get hamburger() {
    return $(
      "#root > div > header > div > button > span.MuiIconButton-label > svg"
    );
  }
  get username() {
    return $(
      "#root > div > header > div > div.jss3 > button > span.MuiButton-label"
    );
  }

  get console() {
    return $("#root > div > div.jss1 > div > div > nav > ol > li > a");
  }

  get events() {
    return $("#root > div > div.jss1 > div > div > div > div > a");
  }
  get personIcon() {
    return $(
      "#root > div > header > div > div:nth-child(5) > button > span.MuiIconButton-label > svg"
    );
  }

  home() {
    this.hamburger.waitForDisplayed(5000);
    this.hamburger.click();

    this.username.waitForDisplayed(5000);
    this.username.click();

    this.console.waitForDisplayed(5000);
    this.console.click();

    this.personIcon.waitForDisplayed(5000);
    this.personIcon.click();
  }
}
module.exports = new home();
