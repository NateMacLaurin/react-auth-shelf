const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')

/**
 * Get all of the items on the shelf
 */
//rejectUnauth is middleware to check for login/not login
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "item"`
  pool.query(queryText).then((response)=>{
    console.log(response);
    res.send(response.rows);
  }).catch((error)=>{
    console.log(error);
    res.sendStatus(500);
  })

  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
