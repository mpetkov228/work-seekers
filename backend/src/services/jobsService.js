const data = require('../../data/jobs');
const { v4: uuid } = require('uuid');

const getAll = () => {
  return data;
};

const create = (job) => {
  console.log(job);
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