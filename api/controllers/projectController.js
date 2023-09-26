const projects = require("../models/project");
const Users = require("../models/user");
const Enumerable = require("linq");

const project_all = async (req, res) => {
  try {
    const project = await projects.find();
    const user = await Users.find();

    const result = Enumerable.from(project)
      .join(
        Enumerable.from(user),
        (x) => project.from,
        (y) => user._id,
        (x, y) => {
          return {
            x,
            y,
          };
        }
      )
      .join(
        Enumerable.from(user),
        (x) => project.to,
        (z) => user.id,
        (x, z) => {
          return {
            x,
            z,
          };
        }
      )
      .toArray();
    res.json(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const project_details = async (req, res) => {
  try {
    const project = await projects.findById(req.params.id);
    res.json(project);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const project_add = async (req, res) => {
  const project = new projects({
    students: req.body.students,
    supervisor: req.body.supervisor,
    cordinator: req.body.cordinator,
    evaluator: req.body.evaluator,
    title: req.body.title,
    fileName: req.body.fileName,
    status: req.body.status,
    remarks: req.body.remarks,
  });
  try {
    const savedproject = await project.save();
    res.send(savedproject);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const project_delete = async (req, res) => {
  try {
    const removeproject = await projects.findByIdAndDelete(req.params.id);
    res.json(removeproject);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const project_update = async (req, res) => {
  try {
    const project = {
      students: req.body.students,
      supervisor: req.body.supervisor,
      cordinator: req.body.cordinator,
      evaluator: req.body.evaluator,
      title: req.body.title,
      fileName: req.body.fileName,
      status: req.body.status,
      remarks: req.body.remarks,
    };
    const updatedproject = await projects.findByIdAndUpdate(
      { _id: req.params.id },
      project
    );
    res.json(updatedproject);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  project_all,
  project_details,
  project_add,
  project_delete,
  project_update,
};
