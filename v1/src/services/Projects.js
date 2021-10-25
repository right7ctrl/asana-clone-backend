const Project = require("../models/Projects");

const insert = (project) => {
  const proj = new Project(project);

  return proj.save();
};

const list = (project) => {
  return Project.find({});
};

module.exports = {
  insert,
  list,
};
