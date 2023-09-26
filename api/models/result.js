const mongoose = require("mongoose");

const ResultShema = new mongoose.Schema(
  {
    Ftitle:{
        type:String,
        required: true,
    },
    GM:{
      type:String,
      required: true,
  },
    interimA: {
      type: String,
      required: true,
    },
    interimB: {
        type: String,
        required: true,
      },
    interimC: {
        type: String,
        required: true,
      },
    SupervisorR: {
        type: String,
        required: true,
      },
    Coordinator: {
        type: String,
        required: true,
      },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Result", ResultShema);
