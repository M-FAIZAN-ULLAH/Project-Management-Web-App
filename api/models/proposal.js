const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    member1: {
      type: String,
      required: true,
    },
    member2: {
        type: String,
        required: true,
      },

      supervisorId: {
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
      evid:{
        type:String,
     
      },
      status:{
        type:String,
        require:true  
      },
      phoneNo1:{
        type:String,
        require:true
      },
      phoneNo2:{
        type:String,
        require:true
      },
      
      // changes here 
      background: {
        type: String,
        required: true,
      }, 
      objectives: {
        type: String,
        required: true,
      }, 
      complexR: {
        type: String,
        required: true,
      }, 
      tools: {
        type: String,
        required: true,
      }, 
      deleverables: {
        type: String,
        required: true,
      },  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("proposals", proposalSchema);
