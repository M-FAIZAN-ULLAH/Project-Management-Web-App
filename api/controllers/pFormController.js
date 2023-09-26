const PForm = require("../models/pform");

const createPForm = async (req, res) => {
  try {
    const {title, telephone, email, designation, comments,supervisorId } = req.body;
    
    const pform = new PForm({
      
      title,
      telephone,
      email,
      designation,
      comments,
      supervisorId,
    });

    const result = await pform.save();
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllPForms = async (req, res) => {
  try {
    const pforms = await PForm.find();
    res.json(pforms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPFormById = async (req, res) => {
  try {
    const pform = await PForm.findById(req.params.id);
    if (!pform) {
      return res.status(404).json({ message: "PForm not found" });
    }
    res.json(pform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePForm = async (req, res) => {
  try {
    const { title, telephone, email, designation, comments } = req.body;
    const pform = await PForm.findById(req.params.id);
    if (!pform) {
      return res.status(404).json({ message: "PForm not found" });
    }
    
    pform.title = title;
    pform.telephone = telephone;
    pform.email = email;
    pform.designation = designation;
    pform.comments = comments;

    const result = await pform.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePForm = async (req, res) => {
  try {
    const pform = await PForm.findById(req.params.id);
    if (!pform) {
      return res.status(404).json({ message: "PForm not found" });
    }

    await pform.remove();
    res.json({ message: "PForm deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPFormByTitle = async (req, res) => {
  try {
    const pform = await PForm.findOne({ title: req.params.title });
    if (!pform) {
      return res.status(404).json({ message: "PForm not found" });
    }
    res.json(pform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getPFormByTitle,
  createPForm,
  getAllPForms,
  getPFormById,
  updatePForm,
  deletePForm,
};
