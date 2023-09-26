const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "default_profile.jpg",
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema);
