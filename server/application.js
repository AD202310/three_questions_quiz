const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware configuration
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Import routes
const quizzesRoute = require('./routers/quizzes');

//Use routes
app.use('/api', quizzesRoute);

module.exports = app;
