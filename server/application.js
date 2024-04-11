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
const dataRoute = require('./routers/data');

//Use routes
app.use('/api', dataRoute);


module.exports = app;
