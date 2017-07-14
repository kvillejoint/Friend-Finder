//require npm dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

//set up express app
const app = express();
const PORT = 3000;

//routes - self-executing function links to both routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//array of objects for friends
const friends = [];

//set up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));






//start server to begin listening
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});