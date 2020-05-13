const links = require("../data/links");

var fieldname = "Program";
var field = links.links[fieldname]["selector"];

console.log(JSON.stringify(field, null, 2));
