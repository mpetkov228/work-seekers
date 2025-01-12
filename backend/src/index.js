const express = require('express');
const cors = require('cors');
const jobsRouter = require('./routes/jobs');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/jobs', jobsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});