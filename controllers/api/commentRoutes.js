const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get("/", (req, res) => {
  Comment.findAll({
    attributes: ["id", "commentText"],
    include: [
      {
        model: User, // Include the User model
      },
    ],
  })
    .then((commentData) => res.json(commentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, async (req, res) => {
  try {
    console.log("||||||||||||||||||||||||||||||||")
    const comment = await Comment.create({
      commentText: req.body.commentText,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router