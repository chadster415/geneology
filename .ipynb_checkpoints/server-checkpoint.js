var express = require("express");
var app = express();

app.get('/family', (req, res) => {
res.sendFile(__dirname + "/family.html");
});

app.use(express.static('public'))

app.listen(3000, () => {
console.log("server started on port 3000")
});