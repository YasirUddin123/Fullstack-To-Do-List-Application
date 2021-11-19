const express = require('express');

// Load the express library from node_modules/express:
const app = express();

// Define a global variable to hold our port address:
const PORT = 5000;

// Require the router:
const tasksRouter = require('./routes/tasksRouter');

// Give us the ability to "read" HTTP request body data in different encodings:
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Tell express where to find out "public" files:
app.use(express.static('server/public'));

// Forward all requests to /tasks to our tasksRouter:
app.use('/tasks', tasksRouter);

// Start server and listen for requests:
app.listen(PORT, () => {
    console.log('Our server is running!');
});
