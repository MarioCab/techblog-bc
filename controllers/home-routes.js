const router = require("express").Router();
const sequelize = require("../config/connection");

const { Posts, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Posts.findAll({
    attributes: ["id", "title", "body", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "text", "post_id", "user_id", "created_at"],
        include: [
          {
            model: User,
            attributes: ["userName"],
          },
        ],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts, logedIn: req.session.logedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
