const mongoose = require('mongoose');
// const cityModel = require('./City');
const itinerarySchema = new mongoose.Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
  },
  title: {
    type: String
  },
  username: {
    type: String
  },
  profilePic: {
    type: String
  },
  likes: {
    type: Number
  },
  duration: {
    type: Number
  },
  price: {
    type: Number
  },
  hashtag: {
    type: Array
  }
});

module.exports = mongoose.model('Itinerary', itinerarySchema, "itineraries");
