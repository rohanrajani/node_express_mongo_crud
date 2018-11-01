let express = require('express')
let config = require('config') 
let app = express()

//Express body parsor config
let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Mongo configration
const mongoose = require("mongoose");

mongoose.connect(config.mongo.mlib_url);
mongoose.Promise = global.Promise;

//Routing
let user = require('./routes/user')
app.use('/user', user)

let port = 9999;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
