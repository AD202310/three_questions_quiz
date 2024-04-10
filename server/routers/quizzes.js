const express = require('express');
const router = express.Router();
const { getAllQuizzes } = require('../db/queries/quizzes');

router.get('/', async (req, res) => {
  try {
    const quizzes = await getAllQuizzes();
    console.log(quizzes);  // Console log
    res.json(quizzes); // Send as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving the quizzes.'); // Send an error response
  }
});

module.exports = router;

