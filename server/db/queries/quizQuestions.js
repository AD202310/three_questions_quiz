const pool = require('../connection');

const getQuizQuestionsById = async (id) => {
  try {
    const quiz = await pool.query('SELECT * FROM quizzes WHERE id=$1;',[id]);
    const questions = await pool.query('SELECT * FROM questions JOIN quizzes ON quizzes.id = quiz_id WHERE quizzes.id = $1;',[id]);

    return {
      quiz: quiz.rows,
      questions: questions.rows
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getQuizQuestionsById,
};
