const getPostsContents = () => {
  const posts = document.querySelectorAll("div");
  const postsArr = [];

  posts.forEach((post) => {
    postsArr.push(post.innerText);
  });

  return postsArr;
};

module.exports = getPostsContents;
