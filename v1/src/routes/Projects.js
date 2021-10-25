const express = require("express");
const router = express.Router();
const { create, index } = require("../controllers/Projects");

router.get("/", index);
router.post("/", create);

module.exports = { router };
