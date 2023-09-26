const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    proposalFile: {
      type: String,
      required: true,
    },
    solFile: {
      type: String,
    },
    uid: {
      type: String,
      required: true,
    },
    sid: {
      type: String,    
    },
    status:{
      type: String,    
    },
    eid:{
      type:String
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ideas", ideaSchema);
