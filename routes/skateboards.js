var express = require('express');
var router = express.Router();
var skateCtrl = require('../controllers/skate-controller');

// All actuals paths start with /skateboards

// GET /skateboards
router.get('/', skateCtrl.index);


module.exports = router;
