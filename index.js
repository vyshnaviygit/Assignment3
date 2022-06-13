//index.js
//Import Express
let express = require('express')
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//Start App
let app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
//Assign port
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function () {
    console.log("Running FirstRest on Port " + port);
})
//Import routes
let apiRoutes = require("./routes")
//Use API routes in the App
app.use('/api', apiRoutes)

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//connect to mongoose
const dbPath = 'mongodb://localhost/CrudDD';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})