const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../Config/connection");

class Posts extends Model {}

Posts.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "posts",
});

module.exports = Posts;
