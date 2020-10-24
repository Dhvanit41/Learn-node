const mongoose = require("mongoose");
const validator = require("validator");
const User = mongoose.model("User", {
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error("Email is not invalid");
      }
    },
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  isArchived: {
    type: Boolean,
    default: false,
    trim: true,
  },
});

module.exports = User;
