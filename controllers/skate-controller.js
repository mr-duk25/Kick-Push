const Skateboard = require('../models/skateboard');



module.exports = { 
    index,
    new: newSkate,
    create,
    show
};

async function show(req, res) {
    const skateboards = await Skateboard.find({});
    res.render('skateboards/show', { title: 'All Boards', skateboards });
  }

async function create(req, res) {
    try {
        await Skateboard.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the skateboard index-all after we implement it
        res.redirect('/skateboards/new');
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('skateboards/new', { title: 'Add A Skate' });
      }
}

function newSkate(req, res) {
res.render('skateboards/new', { title: 'Add A Skate' });
}


  async function index(req, res) {
    const skateboards = await Skateboard.find({});
    res.render('skateboards/index-all', { title: 'All Boards', skateboards });
  }