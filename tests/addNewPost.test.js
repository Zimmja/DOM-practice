/**
 * @jest-environment jsdom
 */

const addNewPost = require("../functions/addNewPost.js");

test("adds a new post", () => {
  document.body.innerHTML = `<input type="text" id="add-post-inpt" value="Default">
  <button id="add-post-btn">Add Post</button>
  <div class="post" id="post-1">
    A first post
  </div>
  <div class="post" id="post-2">
    A second post
  </div>
  <div class="post" id="post-3" style="color: red">
    A third post
  </div>
  `;
  require("../index");
  const button = document.querySelector("#add-post-btn");
  button.click();

  //addNewPost("Testing new post");
  expect(document.querySelectorAll(".post").length).toBe(4);
});
