const express = require('express');
const router = express.Router();
const calculationController = require('./controller');

router.get("/calculate",calculationController.fibonacci);

module.exports = router;
