const express = require("express");

const router = express.Router();
const Review = require("../models/reviewSchema");

router.post("/", (req, res) => {
  console.log(req.body);
  const { review } = req.body;

  Review.create({
    review,
  })
    .then(() => {
      res.status(200).json({ msg: "Done" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
