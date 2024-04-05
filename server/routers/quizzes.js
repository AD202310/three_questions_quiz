const express = require('express');
const db = require('../db');
const router = express.Router();

// Example endpoint to get quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM quizzes;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
