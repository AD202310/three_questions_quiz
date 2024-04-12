const express = require('express');
const router = express.Router();
const { getAllQuizzesCount } = require('../db/queries/allQuizzesCount');


router.get('/quizzes_count', async (req, res) => {
  try {
    const data = await getAllQuizzesCount();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving data.');
  }
});


module.exports = router;
