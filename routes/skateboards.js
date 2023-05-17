const express = require('express');
const router = express.Router();
const skateCtrl = require('../controllers/skates');
const ensureLoggedIn = require('../config/ensureLoggedIn');
// All actuals paths start with /skateboards

// GET /skateboards
router.get('/', skateCtrl.index);

// GET	/skateboards/new display add board form
router.get('/new', ensureLoggedIn, skateCtrl.new);

// GET	/skateboards/:id	Read a specific post	show
router.get('/:id', skateCtrl.show);

// GET /skateboards/:id/edit	Return view (form) to edit a post	edit
router.get('/:id/edit', ensureLoggedIn, skateCtrl.edit);

// PUT	/skateboards/:id	Update specified post	update
router.put('/:id', ensureLoggedIn, skateCtrl.update);

// POST	/skateboards	Create a new skateboard	post
router.post('/', ensureLoggedIn, skateCtrl.create)


module.exports = router;
