const router = require('express').Router();
const jobsService = require('../services/jobsService');

router.get('/', (req, res) => {
  res.json(jobsService.getAll());
});

router.post('/', (req, res) => {
  res.status(201).json(jobsService.create(req.body));
});

module.exports = router;