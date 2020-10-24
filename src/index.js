const path = require("path");
const express = require("express");
const app = express();

require("./db/mongoose");
const User = require("./models/User");

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.send("Hello express!");
});

app.post("/users", (req, res) => {
    const user = new User(req.body);
    user().save( ).then(()=>{
        res.send()
    }).catch(()=>{

    })
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
