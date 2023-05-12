const Skateboard = require('../models/skateboard');



module.exports = { 
    index
};

function index(req, res) {
    res.render('skateboards/index-all', {
      skateboards: Skateboard.getAll(), 
      title: 'All Boards'
    });
  }