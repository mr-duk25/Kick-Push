
const Skateboard = require('../models/skateboard');



module.exports = { 
    index,
    new: newSkate,
    create,
    show,
    edit,
    update
};


async function update(req, res) {
  try {
      await Skateboard.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
      // Always redirect after CUDing data
      // We'll refactor to redirect to the skateboard index-all after we implement it
      res.redirect('/skateboards');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('skateboards/edit', { title: 'Edit A Skate' });
    }
}


// async function edit(req, res) {
//   const skateboards = Skateboard.getOne(req.params.id);
//   res.render('skateboards/edit', {
//       title: 'Edit',
//       skateboards
//   });
// }

async function edit(req, res) {
    const skateboard = await Skateboard.findById(req.params.id);
    
    res.render('skateboards/edit', { title: 'Edit', skateboard });
  }


async function show(req, res) {
    const skateboards = await Skateboard.findById(req.params.id);
    
    res.render('skateboards/show', { title: 'Details', skateboards });
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