const sequelize = require("../config/connection");
const seedComment = require("./comment-seeds");
const seedUser = require("./user-seeds");
const seedPosts = require("./post-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("/n Database success");

  await seedUser();
  console.log("/n seed user success");

  await seedPosts();
  console.log("/n seed posts success");

  await seedComment();
  console.log("/n seed comment success");

  console.log("/n all seeding successful!");

  process.exit(0);
};

seedAll();
