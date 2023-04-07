const { addPet } = require("../controllers/pet.controller");
const express = require("express");
const router = express.Router();

router.post("/", addPet);

module.exports = router;
