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
    //setting arbitrary amount that cannot be reached in results. This is for calculating match difference later and ensuring potential differences would not
    matchDifference: 5000
  };


  //variable for user input and scores
  let userInput = req.body;
  let userScore = userInput.scores;
  //difference between userScore and matchScore will start at 0 as a preset value
  let scoreDifference = 0;

  //for loop through friends array to search through all friends in list (for when new ones are added)
  for (var i = 0; i <= friends.length; i++) {
    //to show amount of friends in array (to confirm additions)
    console.log(friends[i]); 
    //start with score difference as zero each time for recalculation of scrore differences in second for loop
    scoreDifference = 0;
    //secondary for loop to go through friend scores for each friend in the array
    //different variable letter needed for second for loop
      for (var x = 0; x <= friends[i].scores; x++) {
        //for each store calculate a totalDifference
        //Math.abs makes all numbers into absolute value
        totalDifference = Math.abs(parseInt(userScore[x] - parseInt(friends[i].scores[x])));
        //if statement to check total difference between user input vs current list of friends. If totalDifference is less than or equal to the matchDifference under friendMatch variable, then set the friendMatch to the closest candidate
        if (totalDifference <= friendMatch.matchDifference) {
          //set or reset friendMatch to equal the values of the new friend
          friendMatch.name = friends[i].name;
          friendMatch.photo = friends[i].photo;
          //reset totalDifference value to the new matchDifference so that future difference will refer back to this
          friendMatch.matchDifference = totalDifference;
        };
      };
  };
//push user info to the database after all the matching checks so that best match saves with user instead of user info being best match since lowest total difference to itself
friends.push(userInput);
//put results of matching into the JSON file with the users match result.
res.json(friendMatch);
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