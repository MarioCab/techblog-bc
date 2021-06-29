const { Posts } = require("../modelsbanana");

const testPosts = [
  {
    title: "Welcome!",
    body: "This blog site is just a aplce to dump your mind. Say whatevers clouding up your noggin!",
    user_id: 1,
  },
];

const seedPosts = () => Posts.bulkCreate(testPosts);

module.exports = seedPosts;
