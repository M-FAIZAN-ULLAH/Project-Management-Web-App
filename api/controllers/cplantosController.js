const CplantoS = require("../models/CplantoS");

const createCplantoS = async (req, res) => {
  try {
    const { name, deadline } = req.body;

    const cplantoS = new CplantoS({
      name,
      deadline,
    });

    const result = await cplantoS.save();

    res.json(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getCplantoS = async (req, res) => {
  try {
    const cplantoSList = await CplantoS.find();

    res.json(cplantoSList);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getCplantoSByName = async (req, res) => {
  try {
    const { name } = req.query;
    const cplantoS = await CplantoS.findOne({ name });
    res.json(cplantoS);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


module.exports = {
  createCplantoS,
  getCplantoS,
  getCplantoSByName,
};
