const updateInnerText = require("./functions/setElementText");
const getPostContents = require("./functions/getPostContents");
const addNewPost = require("./functions/addNewPost");

updateInnerText("post-1", "A first post refreshed by JavaScript.");
updateInnerText("post-2", "A second one");

console.log(`Posts: ${getPostContents()}`);

const button = document.querySelector("#add-post-btn");
const input = document.querySelector("#add-post-inpt");

button.addEventListener("click", () => {
  addNewPost(input.value);
});
