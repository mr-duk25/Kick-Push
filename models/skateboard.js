const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const skateBoardSchema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['Long Board', 'Short Board', 'Mini Board', 'Electric', 'Other']
  },
  style: {
    type: String,
  },
  trucks: {
    type: String,
  },
  wheels: {
    type: Number, 
    min: 50,
    
  },
  modifications: { 
    type: String 
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});




module.exports = mongoose.model('Skateboard', skateBoardSchema);