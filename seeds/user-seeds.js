const { User } = require("../Models");

const primaryUserData = [
  {
    username: "mariocab",
    password: "creator",
    email: "creator@me.com",
  },
  {
    username: "jessback",
    password: "helper",
    email: "helper@her.com",
  },
];

const seedUser = () => User.bulkCreate(primaryUserData);

module.exports = seedUser;
