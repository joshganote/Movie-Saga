const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get ('/', (req,res) => {
    let queryText = 
    `SELECT * FROM "movies"
    ORDER BY "movies"."id" ASC;`;
    pool.query(queryText)
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log(`couldn't get movie`, error);
        res.sendStatus(500);
    })
})

router.get ('/detail', (req,res) => {
    let queryText = 
    `SELECT * FROM "movies"
    JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id"
    JOIN "genres" ON "movies_genres"."genres_id" = "genres"."id"
    ORDER BY "movies"."id" ASC;`;
    pool.query(queryText)
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log(`couldn't get movie`, error);
        res.sendStatus(500);
    })
})
module.exports = router;