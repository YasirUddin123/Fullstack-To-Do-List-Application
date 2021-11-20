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

// DELETE => We need to make a DELETE route to DELETE data in the database per the client request.
// Since we're using router, the path is actually for tasks, but we can use '/' here.
// Then we need to use SQL text and query to DELETE data from the database.
// If it's successful, we delete the data from the database and send a status 200
// If it's not successful, we send a 500 status.
router.delete('/:id', (req, res) => {
    console.log('DELETE /tasks/:id');
    console.log('req.params:', req.params.id);
    const taskIdToDelete = req.params.id;
    const sqlText = `
        DELETE FROM "tasks"
            WHERE "id"=$1;
    `;
    const sqlValues = [taskIdToDelete];

    pool.query(sqlText, sqlValues)
        .then((dbResult) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log(dbErr);
            res.sendStatus(500);
        });
});

// UPDATE => We need to make a PUT route to UPDATE data in the database per the client request.
// Since we're using router, the path is actually for tasks, but we can use '/' here.
// Then we need to use SQL text and query to UPDATE data on the database.
// If it's successful, we update the data on the database and send a status 200
// If it's not successful, we send a 500 status.

module.exports = router;
