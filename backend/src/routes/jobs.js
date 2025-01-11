const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('jobs');
});

module.exports = router;