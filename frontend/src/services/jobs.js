import axios from "axios";

const baseUrl = 'http://localhost:3000/api/jobs';

async function getAll() {
  const { data } = await axios.get(baseUrl);
  return data;
}

export default {
  getAll
};