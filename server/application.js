const express = require('express');
const quizzesRouter = require('./routers/quizzes');

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Use the quizzes router for routes starting with /quizzes
app.use('/quizzes', quizzesRouter);

module.exports = app;
