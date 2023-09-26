const mongoose = require("mongoose");

const CplantoSshema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    deadline: {
        type: Date,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CplantoS", CplantoSshema);
