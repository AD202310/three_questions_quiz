const pool = require('../connection');

const getAllData = async () => {
  try {
    const users = await pool.query('SELECT * FROM users;');
    const quizzes = await pool.query('SELECT * FROM quizzes;');
    const questions = await pool.query('SELECT * FROM questions;');

    return {
      users: users.rows,
      quizzes: quizzes.rows,
      questions: questions.rows
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllData,
};
