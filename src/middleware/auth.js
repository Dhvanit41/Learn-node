const jwt = require("jsonwebtoken");
const User = require("../models/User");
require('dotenv').config()

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.AUTH_TOKEN_KEY);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!User) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch {
    res.status(401).send({
      error: "pleases authenticate",
    });
  }
};
module.exports = auth;
