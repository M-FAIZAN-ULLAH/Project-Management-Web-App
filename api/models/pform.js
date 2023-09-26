const mongoose = require("mongoose");

const pformSchema = new mongoose.Schema(
  {

    title: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    designation: {
        type: String,
        required: true,
      },
    comments: {
        type: String,
        required: true,
      }, 
      supervisorId:{
        type:String,
        require:true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pform", pformSchema);
