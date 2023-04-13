const { addPet, getPets, deletePet } = require("../controllers/pet.controller");
const express = require("express");
const router = express.Router();

router.post("/", addPet);

router.get("/", getPets);

router.delete("/:id", deletePet);

module.exports = router;
