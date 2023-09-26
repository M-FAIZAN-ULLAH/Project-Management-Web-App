const Result = require("../models/result");

const addResult = async (req, res) => {
  try {
    const { Ftitle, GM, interimA, interimB, interimC, SupervisorR, Coordinator } = req.body;
    const result = new Result({
      Ftitle,
      GM,
      interimA,
      interimB,
      interimC,
      SupervisorR,
      Coordinator,
    });

    const response = await result.save();
    res.json(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getResult = async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    const { Ftitle, GM, interimA, interimB, interimC, SupervisorR, Coordinator } = req.body;

    const updatedResult = await Result.findByIdAndUpdate(
      id,
      { Ftitle, GM, interimA, interimB, interimC, SupervisorR, Coordinator },
      { new: true }
    );

    res.json(updatedResult);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  addResult,
  getResult,
  updateResult,
};
