const mongoose = require("mongoose");

const remarksSchema = new mongoose.Schema(
  {
    detail: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("remarks", remarksSchema);
