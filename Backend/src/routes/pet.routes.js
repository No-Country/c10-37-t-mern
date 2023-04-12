const { addPet, getPets } = require("../controllers/pet.controller");
const express = require("express");
const router = express.Router();

router.post("/", addPet);

router.get("/", getPets);

module.exports = router;
