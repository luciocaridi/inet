const express = require("express");
const app = express();
var router = express.Router();
router.get('/', function(req, res) {
    res.send('Hello World');  
});
router.get('/test', function(req, res) {
    res.send('Test page'); 
});
app.use('/', router);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));