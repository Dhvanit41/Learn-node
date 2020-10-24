const path = require("path");
const express = require("express");
const app = express();

require("./db/mongoose");
const User = require("./models/User");
const userRouter = require("./routers/user");

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(userRouter);

// app.use((req, res, next) => {
//   console.log();
//   next();
// });

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
