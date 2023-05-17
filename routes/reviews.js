const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /skateboards/:id/reviews (create review for a movie)
router.post('/skateboards/:id/reviews', ensureLoggedIn, reviewCtrl.create);

// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, reviewCtrl.delete);



module.exports = router;