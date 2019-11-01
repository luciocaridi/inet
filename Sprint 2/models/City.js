var mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    country: String
});
  
var City = mongoose.model('City', userSchema);

module.exports = City;