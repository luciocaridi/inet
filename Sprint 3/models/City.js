var mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: String,
    name: String,
    country: String
    
});
  
var City = mongoose.model('City', userSchema);

module.exports = City;