const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "DamnNigg");
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
