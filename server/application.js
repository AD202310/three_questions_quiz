const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware configuration
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Import routes
const allQuizzesCountRoute = require('./routers/allQuizzesCount');
const quizQuestionsRoute = require('./routers/quizQuestions');

//Use routes
app.use('/api', allQuizzesCountRoute);
app.use('/api', quizQuestionsRoute);

module.exports = app;
