const data = require('../../data/jobs');
const { v4: uuid } = require('uuid');

const getAll = () => {
  return data;
};

const getOne = (id) => {
  const job = data.find(item => item.id === id);
  return job;
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
  getAll, getOne, create
};