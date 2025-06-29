const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.json({
    name: 'Ratnadeep', 
    role: 'Backend Developer',
    status: 'Active'
  });
});

module.exports = router;