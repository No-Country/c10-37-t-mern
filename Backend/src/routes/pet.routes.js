const {
  addPet,
  getPets,
  deletePet,
  getPetsById,
} = require("../controllers/pet.controller");
const express = require("express");
const router = express.Router();

router.post("/", addPet);

router.get("/", getPets);

router.get("/:id", getPetsById);

router.delete("/:id", deletePet);

module.exports = router;
