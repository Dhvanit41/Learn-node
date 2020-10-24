const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/Fantasy-League", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
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
    type: string,
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

const me = new User({
  name: "Dhvanit",
  email: "dhvanit@gmail.com",
  phoneNumber: 9638774505,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((e) => {
    console.log("Error!", e);
  });
