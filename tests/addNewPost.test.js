/**
 * @jest-environment jsdom
 */

const addNewPost = require("../functions/addNewPost.js");

test("adds a new post", () => {
  document.body.innerHTML = `<div class="post" id="post-1">
  A first post
</div>
<div class="post" id="post-2">
  A second post
</div>
<div class="post" id="post-3" style="color: red">
  A third post
</div>
  `;
  addNewPost("Testing new post");
  expect(document.querySelectorAll(".post").length).toBe(4);
});
