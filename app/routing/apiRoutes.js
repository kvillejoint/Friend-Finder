//const path = require("path");
const friends = require("../data/friends.js");

module.exports = function(app){
//console.log("Loaded api routes")

//GET route display a JSON of all possible friends
app.get("/api/friends", function(req, res) {
    // var chosen = req.params.friends;
    res.json(friends);
});

// POST route to handle incoming survey results and compatibiliy logic
app.post("/api/friends", function(req, res) {
  
  let friendMatch = {
    name: "",
    photo: "",
    matchDifference: 100
  };


  //variable for user input and scores
  let userInput = req.body;
  let userScore = userInput.scores;
  //difference between userScore and matchScore will start at 0 as a preset value
  let scoreDifference = 0;

  //for loop through friends array in database to calculate difference in scores
  for (var i = 0; i <= friends[i].scores; i++) {
  
  //secondary for loop to go through scores of each friend in the friends array
  };
//parse data from user input into scores


//for loop for all friend possibilities in database
});







/*
// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});
*/



};