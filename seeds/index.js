const commentSeed = require("./comment-seeds");
const userSeed = require("./user-seeds");
const postSeed = require("./post-seeds");
const { sequelize } = require("../Config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await userSeed();
  await postSeed();
  await commentSeed();
  process.exit(0);
};

seedAll();
