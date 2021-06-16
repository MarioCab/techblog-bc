const { Comment } = require("../Models");

const fakeComments = [
  {
    text: "It does!",
    user_id: 2,
    post_id: 1,
  },
  {
    text: "So smart!",
    user_id: 1,
    post_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(fakeComments);

module.exports = seedComment;
