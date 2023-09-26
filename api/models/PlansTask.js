const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {

      planTaskId:{
        type: String,
        required: true,
      },
      proposalFile: {
        type: String,
        required: true,
      },

      uid:{
        type:String,
        require:true,
      },
    
     
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("plantasks", proposalSchema);
