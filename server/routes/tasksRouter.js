const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();

// Code for client requests will go here
// GET => We need to make a GET route to the database in order to take data from it per the client request.
// Since we're using router, the path is actually for tasks, but we can use '/' here.
// Then we need to use SQL text and query to select data from the database.
// If it's successful, we send the data back to the cliient.
// If it's not successful, we send a 500 status.
router.get('/', (req, res) => {
    console.log('GET /tasks');
    const sqlText = 'SELECT * FROM tasks;';
    pool.query(sqlText)
        .then((dbResult) => {
            console.log(`${dbResult.rows.length} rows to send`);
            res.send(dbResult.rows);
        })
        .catch((dbErr) => {
            console.log(dbErr);
            res.sendStatus(500);
        });
});

// POST => We need to make a POST route to STORE data in the database per the client request.
// Since we're using router, the path is actually for tasks, but we can use '/' here.
// Then we need to use SQL text and query to INSERT data TO the database.
// If it's successful, we store data in the database and send a status 201
// If it's not successful, we send a 500 status.
router.post('/', (req, res) => {
    console.log('POST /songs');
    console.log('req.body:', req.body);
    const newTask = req.body;
    const sqlText = `
        INSERT INTO "tasks"
        ("task")
        VALUES
        ($1)
    `;
    const sqlValues = [
        newTask.task
    ];
    pool.query(sqlText, sqlValues)
        .then((dbResult) => {
            console.log('\tINSERT success!');
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            console.log(dbErr);
            res.sendStatus(500);
        });
});

// DELETE request


module.exports = router;
