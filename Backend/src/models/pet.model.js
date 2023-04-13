const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

petSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Pet", petSchema);
