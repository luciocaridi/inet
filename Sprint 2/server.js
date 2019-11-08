const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://luciocaridi:Holachau1!@inet-mern-y4oux.gcp.mongodb.net/cities?retryWrites=true&w=majority' , function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});
app.use(cors())
var router = express.Router();
router.get('/', function(req, res) {
    res.send('Hello World');  
});
router.get('/test', function(req, res) {
    res.send('Test page'); 
});
var City = require('./models/City');

router.get('/cities/all', function(req, res) {
       City.find({}, function(err, cities) {
           res.send(cities);
       });
});

app.use('/', router);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));




