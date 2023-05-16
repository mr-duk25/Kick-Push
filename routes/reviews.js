var express = require('express');
var router = express.Router();
var reviewCtrl = require('../controllers/reviews');

// POST /skateboards/:id/reviews (create review for a movie)
router.post('/skateboards/:id/reviews', reviewCtrl.create);

// DELETE /reviews/:id
router.delete('/reviews/:id', reviewCtrl.delete);



module.exports = router;