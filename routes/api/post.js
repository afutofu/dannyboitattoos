const express = require("express");
const router = express.Router({ mergeParams: true });
const axios = require("axios");
require("dotenv/config");

// @route   GET /api/posts
// @desc    Get 12 posts
// @access  Public
router.get("/", (req, res) => {
  // Use Instagram Basic Display API to access the posts
  axios
    .get(
      `https://graph.instagram.com/me/media?fields=id,media_type, media_url,permalink&access_token=${process.env.IG_ACCESS_TOKEN}`
    )
    .then((IGres) => {
      let postCount = 0;
      let posts = IGres.data.data.filter((post) => {
        // Get at least 12 non-video posts
        if (postCount < 12 && post.media_type !== "VIDEO") {
          postCount++;
          return post;
        }
      });
      console.log("Posts successfully sent");
      res.send(posts);
    })
    .catch((err) => {
      return res.status(500).json({ msg: "Error in retreiving posts" });
    });
});

module.exports = router;
