const { User } = require("../Models/User");

const primaryUserData = [
  {
    userName: "mariocab",
    password: "creator",
  },
  {
    userName: "jessback",
    password: "helper",
  },
];

const seedUser = () => User.bulkCreate(primaryUserData);

module.exports = seedUser;
