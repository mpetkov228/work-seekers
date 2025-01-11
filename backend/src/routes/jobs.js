const router = require('express').Router();
const jobsService = require('../services/jobsService');

router.get('/', (req, res) => {
  res.json(jobsService.getAll());
});

module.exports = router;