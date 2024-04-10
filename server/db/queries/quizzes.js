const pool = require('../connection');

const getAllQuizzes = async () => {
  try {
    const result = await pool.query('SELECT * FROM quizzes;');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllQuizzes,
};
