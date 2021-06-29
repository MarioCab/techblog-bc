const User = require("./User");
const Comment = require("./Comment");
const Posts = require("./Posts");

User.hasMany(Posts, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(Posts, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Posts.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Posts.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

module.exports = { User, Posts, Comment };
