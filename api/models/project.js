const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    students: {
      type: Object,
      required: true,
    },
    supervisor: {
      type: String,
      required: true,
    },
    cordinator: {
      type: String,
    },
    evaluator: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    remarks: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("projects", projectSchema);
