const countPosts = () => {
  return document.querySelectorAll(".post").length;
};

const addNewPost = (newText) => {
  console.log("Adding new div...");
  const newDiv = document.createElement("div");

  newDiv.innerText = newText;
  newDiv.className = "post";
  newDiv.id = `post-${countPosts() + 1}`;
  document.body.appendChild(newDiv);
};

module.exports = addNewPost;
