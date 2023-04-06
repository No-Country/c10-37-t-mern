const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
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
    unique: true,
    require: true,
  },
  photo: {
    type: String,
    unique: true,
  },
  attributes: {
    type: String,
    requered: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("pet", petSchema);
