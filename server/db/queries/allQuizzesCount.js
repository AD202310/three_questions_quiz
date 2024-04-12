const pool = require('../connection');

const getAllQuizzesCount = async () => {
  try {
    const quizzes = await pool.query('SELECT count(name) FROM quizzes;');
    return quizzes.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllQuizzesCount,
};
