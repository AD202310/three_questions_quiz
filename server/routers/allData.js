const express = require('express');
const router = express.Router();
const { getAllData } = require('../db/queries/allData');


router.get('/', async (req, res) => {
  try {
    const data = await getAllData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving data.');
  }
});


module.exports = router;
