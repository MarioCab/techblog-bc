const { User } = require("../modelsbanana");

const primaryUserData = [
  {
    username: "ADMIN",
    password: "creator",
    email: "creator@me.com",
  },
];

const seedUser = () => User.bulkCreate(primaryUserData);

module.exports = seedUser;
