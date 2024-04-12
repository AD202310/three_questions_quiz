const express = require('express');
const router = express.Router();
const { getQuizQuestionsById } = require('../db/queries/quizQuestions');


router.get('/quiz/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const quizQuestions = await getQuizQuestionsById(id);
    res.json(quizQuestions);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving data.');
  }
});



module.exports = router;
