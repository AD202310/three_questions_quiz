const express = require('express');
const router = express.Router();
const { getAllQuizzes } = require('../db/queries/quizzes');

router.get('/', async (req, res) => {
  try {
    const quizzes = await getAllQuizzes();
    res.status(200).json({
      message: "Successfully retrieved all quizzes",
      data: quizzes
    });
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({
      message: "Error fetching quizzes",
      error: error.message
    });
  }
});

module.exports = router;

