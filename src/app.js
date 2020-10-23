const path = require('path')
const express = require("express");
const app = express();


app.use(express.static(path.join(__dirname,'../public')))
app.set('view engine', 'hbs');

app.get("", (req, res) => {
  res.send("Hello express!");
});

app.listen(3000, () => {
  console.log("Server is up on port " + 3000);
});
