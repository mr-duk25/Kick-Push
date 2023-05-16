const Skateboard = require('../models/skateboard');


module.exports = { 
    create,
    delete: deleteReview
   };

   async function deleteReview(req, res) {
    const skateboard = await Skateboard.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // Rogue user!
    if (!skateboard) return res.redirect('/skateboards');
    // Remove the review using the remove method available on Mongoose arrays
    skateboard.reviews.remove(req.params.id);
    // Save the updated skateboard doc
    await skateboard.save();
    // Redirect back to the skateboard's show view
    res.redirect(`/skateboards/${skateboard._id}`);
  }
    

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