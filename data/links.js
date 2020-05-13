const links = {
  Usermenu: {
    selector: "#root > div > header > div > div > div > div.text",
    url: "/user",
  },
  Dashboard: {
    selector: "#root > div > header > div > div > a",
    url: "/user",
  },
  Account: {
    selector:
      "#root > div > header > div > div > div > div.menu.transition.visible > a:nth-child(1)",
    url: "/auth/realms/laminar/account",
  },

  Logout: {
    selector:
      "#root > div > header > div > div > div > div.menu.transition.visible > a:nth-child(2)",
    url: "/user/logout",
  },
  Laminar: {
    selector: "#root > div > header > div > a",
    url: "/user",
  },
  Program: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(1) > div.title > div",
    url: "/user",
  },
  People: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(3) > div.active.title > div",
    url: "/user",
  },
  Flow: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(5) > div.active.title > div",
    url: "/user",
  },
  Timeline: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(7) > div.active.title > div",
    url: "/user",
  },
  Programs: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(1) > div:nth-child(2) > b > a",
    url: "/user/programs",
  },
  Products: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(1) > div:nth-child(3) > b > a",
    url: "/user/products",
  },
  Features: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(1) > div:nth-child(4) > b > a",
    url: "/user/features",
  },
  Functionality: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(1) > div:nth-child(5) > b > a",
    url: "/user/functionality",
  },
  Implementation: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(1) > div:nth-child(6) > b > a",
    url: "/user/implementations",
  },
  Organizations: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(3) > div:nth-child(2) > b > a",
    url: "/user/organizations",
  },
  Teams: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(3) > div:nth-child(3) > b > a",
    url: "/user/teams",
  },
  Individuals: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(3) > div:nth-child(4) > b > a",
    url: "/user/people",
  },
  Invitations: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(3) > div:nth-child(5) > b > a",
    url: "/user/invites",
  },
  Events: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(5) > div:nth-child(2) > b > a",
    url: "/user/events",
  },

  Questions: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(5) > div:nth-child(3) > b > a",
    url: "/user/questions",
  },
  Actions: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(5) > div:nth-child(4) > b > a",
    url: "/user/actions",
  },
  Decisions: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(5) > div:nth-child(5) > b > a",
    url: "/user/decisions",
  },
  Recent: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(7) > div:nth-child(2) > b > a",
    url: "/user/timeline/recent",
  },
  Event: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(7) > div:nth-child(3) > b > a",
    url: "/user/timeline/event",
  },
  Action: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(7) > div:nth-child(4) > b > a",
    url: "/user/timeline/action",
  },
  Decision: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(7) > div:nth-child(5) > b > a",
    url: "/user/timeline/decision",
  },
  Product: {
    selector:
      "#root > div > main > div > div.ui.inverted.vertical.labeled.icon.ui.push.left.thin.visible.sidebar.menu > div > div:nth-child(7) > div:nth-child(6) > b > a",
    url: "/user/timeline/product",
  },
};

exports.links = links;
