// controller.js

const Cevaluation = require("../models/Cevaluation");

const addCevaluation = async (req, res) => {
  try {
    const { ptitle,Ename, projectS, projectI, projectMS, indivisualTW, fypDS } = req.body;
    const cevaluation = new Cevaluation({
      
      ptitle,
      Ename,
      projectS,
      projectI,
      projectMS,
      indivisualTW,
      fypDS,
    });

    const response = await cevaluation.save();
    res.json(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getCevaluations = async (req, res) => {
  try {
    const cevaluations = await Cevaluation.find();
    res.json(cevaluations);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getCevaluationsByEname = async (req, res) => {
  try {
    const { Ename } = req.query;
    const cevaluations = await Cevaluation.find({ Ename });
    res.json(cevaluations);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getCevaluationsBytitle = async (req, res) => {
  try {
    const  {ptitle}  = req.query;
    const cevaluations = await Cevaluation.find({ ptitle });
    res.json(cevaluations);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  addCevaluation,
  getCevaluations,
  getCevaluationsByEname,
  getCevaluationsBytitle,
};
