const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post("/users", (req, res) => {
  const user = new User(req.body);
  user()
    .save()
    .then(() => {
      res.send();
    })
    .catch(() => {});
});

module.exports = router;
