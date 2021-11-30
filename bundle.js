(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // functions/setElementText.js
  var require_setElementText = __commonJS({
    "functions/setElementText.js"(exports, module) {
      module.exports = (id, newText) => {
        document.getElementById(id).innerText = newText;
      };
    }
  });

  // functions/getPostContents.js
  var require_getPostContents = __commonJS({
    "functions/getPostContents.js"(exports, module) {
      var getPostsContents = () => {
        const posts = document.querySelectorAll("div");
        const postsArr = [];
        posts.forEach((post) => {
          postsArr.push(post.innerText);
        });
        return postsArr;
      };
      module.exports = getPostsContents;
    }
  });

  // functions/addNewPost.js
  var require_addNewPost = __commonJS({
    "functions/addNewPost.js"(exports, module) {
      var countPosts = () => {
        return document.querySelectorAll(".post").length;
      };
      var addNewPost2 = (newText) => {
        console.log("Adding new div...");
        const newDiv = document.createElement("div");
        newDiv.innerText = newText;
        newDiv.className = "post";
        newDiv.id = `post-${countPosts() + 1}`;
        document.body.appendChild(newDiv);
      };
      module.exports = addNewPost2;
    }
  });

  // index.js
  var updateInnerText = require_setElementText();
  var getPostContents = require_getPostContents();
  var addNewPost = require_addNewPost();
  updateInnerText("post-1", "A first post refreshed by JavaScript.");
  updateInnerText("post-2", "A second one");
  console.log(`Posts: ${getPostContents()}`);
  var button = document.querySelector("#add-post-btn");
  var input = document.querySelector("#add-post-inpt");
  button.addEventListener("click", () => {
    addNewPost(input.value);
  });
})();
