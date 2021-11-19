// Making sure we can run everything when the document loads.
$(document).ready(onReady);


function onReady() {
   // These tie into making a GET and POST request.
   // This is important when we handle an event handler when we click on the button to add a task on our application
   // And render to the DOM.
    renderTasks();
    $('#createTask').on('click', addTask);
}

// Making a GET request.
// If the response is successful,
// the server will send a response to the client
// and append every task submitted.


// Make a POST request to store data in my server.
// If it's successful,
// then we want to update our DOM with the new data
// by calling the renderTasks function.
