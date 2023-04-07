const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    requered: true,
  },
  age: {
    type: Number,
    requered: true,
  },
  race: {
    type: String,
    requered: true,
  },
  medicalHistory: {
    type: String,
    requered: true,
  },
  photo: {
    type: String,
  },
  attributes: {
    type: String,
  },
  userId: {
    type: String,
    requered: true,
  },
});
mongoose.connect(process.env.MONGODBURL);
module.exports = mongoose.model("pets", petSchema);
