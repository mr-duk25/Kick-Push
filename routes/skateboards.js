var express = require('express');
var router = express.Router();
var skateCtrl = require('../controllers/skates');

// All actuals paths start with /skateboards

// GET /skateboards
router.get('/', skateCtrl.index);

// GET	/skateboards/new display add board form
router.get('/new', skateCtrl.new);

// GET	/skateboards/:id	Read a specific post	show
router.get('/:id', skateCtrl.show);


// POST	/skateboards	Create a new skateboard	post
router.post('/', skateCtrl.create)


module.exports = router;
