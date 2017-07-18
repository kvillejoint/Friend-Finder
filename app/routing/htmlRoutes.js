//require path npm for html routing
const path = require("path");

module.exports = function(app) {
//express path for home html page
app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});
//express path for survey html page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

};