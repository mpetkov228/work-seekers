import axios from "axios";

const baseUrl = 'http://localhost:3000/api/jobs';

async function getAll() {
  const { data } = await axios.get(baseUrl);
  return data;
}

async function createJob(job) {
  const { data } = await axios.post(baseUrl, job);
  return data;
}

export default {
  getAll, createJob
};