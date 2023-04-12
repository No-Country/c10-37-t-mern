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

async function getPets(req, res) {
  try {
    const pets = await petCollection.find();
    return res.status(200).json({ status: "success", data: pets });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { addPet, getPets };
