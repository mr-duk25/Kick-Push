const Skateboard = require('../models/skateboard');


module.exports = { 
    create,
   };

   async function create(req, res) {
    console.log('test')
    const skateboard = await Skateboard.findById(req.params.id);
  
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    // We can push (or unshift) subdocs into Mongoose arrays
    skateboard.reviews.push(req.body);
    try {
      // Save any changes made to the movie doc
      await skateboard.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/skateboards/${skateboard._id}`);
  }