const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../Config/connection");

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "posts",
      key: "id",
    },
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "comment",
});

module.exports = Comment;
