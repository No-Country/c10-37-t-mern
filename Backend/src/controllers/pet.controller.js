const petCollection = require("../models/pet.model.js");

async function addPet(req, res) {
  try {
    await petCollection.insertMany(req.body);
    return res
      .status(200)
      .json({ status: "success", message: "Mascota creada!" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { addPet };
