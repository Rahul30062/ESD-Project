const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  image: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/simple-trendy-star-logo_535345-2471.jpg",
  },
  review: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
