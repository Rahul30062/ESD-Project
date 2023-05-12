const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const route = require("../server/routes/review");
const app = express();
app.use(cors());

const db = "mongodb+srv://sawrahul0150:Rahul14@cluster0.vqgjrsy.mongodb.net/";
const Review = require("../server/models/reviewSchema");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongodb Connected");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};
connectDB();
app.use(express.json());
app.use(route);

app.listen(8080, () => {
  console.log("Server Running");
});
