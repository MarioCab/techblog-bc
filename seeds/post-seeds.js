const { Posts } = require("../Models/Posts");

const testPosts = [
  {
    title: "Wowzers, a blog post!",
    body: "I sure do hope it works!",
    user_id: 1,
  },
  {
    title: "I feel smart",
    body: "Like look what Im able to do while laying on my couch at 10pm",
    user_id: 2,
  },
];

const seedPosts = () => Posts.bulkCreate(testPosts);

module.exports = seedPosts;
