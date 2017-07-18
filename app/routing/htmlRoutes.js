//require path npm for html routing
const path = require("path");

module.exports = function(app) {
//console.log("Loaded html routes")
    //express path for home html page

//express path for survey html page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});
};