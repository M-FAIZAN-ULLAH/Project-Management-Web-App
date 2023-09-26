const mongoose = require("mongoose");

const Cevaluationshema = new mongoose.Schema(
  {
    ptitle:{
        type:String,
        required: true,
    },
    Ename:{
      type:String,
      required: true,
  },
    projectS: {
      type: String,
      required: true,
    },
    projectI: {
        type: String,
        required: true,
      },
    projectMS: {
        type: String,
        required: true,
      },
    indivisualTW: {
        type: String,
        required: true,
      },
    fypDS: {
        type: String,
        required: true,
      },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cevaluation", Cevaluationshema);
