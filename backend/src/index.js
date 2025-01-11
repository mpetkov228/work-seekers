const express = require('express');
const jobsRouter = require('./routes/jobs');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/jobs', jobsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});