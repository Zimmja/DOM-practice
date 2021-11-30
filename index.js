const updateInnerText = require("./functions/setElementText");
const getPostContents = require("./functions/getPostContents");
const addNewPost = require("./functions/addNewPost");

updateInnerText("post-1", "A first post refreshed by JavaScript.");
updateInnerText("post-2", "A second one");

console.log(`Posts: ${getPostContents()}`);

addNewPost("A fourth post");
