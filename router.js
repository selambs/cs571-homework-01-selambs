const express = require("express");
const fibonacci = require("./fibController");
const router = express.Router();

// router.get(`/calculate/:?n=${5}`, fibonacci.calculateFib);
router.get("/calculaten=5", fibonacci.calculateFib);

module.exports = router;
