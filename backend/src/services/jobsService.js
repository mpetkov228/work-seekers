const data = require('../../data/jobs');
const uuid = require('uuid');

const getAll = () => {
  return data;
};

const create = (job) => {
  const newJob = {
    id: uuid(),
    ...job
  };
  data.push(newJob);

  return newJob;
};

module.exports = {
  getAll, create
};