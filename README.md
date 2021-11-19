# Project: SQL To-Do List

## Description
In this project, I am creating a 'TO DO' application. Here are the features:

    * Create a front end experience that allows a user to create a Task.
    * When the Task is created, it will be stored inside of a database (SQL).
    * Whenever a Task is created, the front end can refresh to show all tasks that need to be completed.
    * Each Task has an option to 'Complete' or 'Delete'.
    * When a Task is complete, its visual representation can change on the front end. For example, the background of the task container can change from one color to another. The complete option should be 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
    * Whether or not a Task is completed can also be stored in the database.
    * Deleting a Task can remove it from both the front end as well as the database.

### Styling
I used CSS styling to move the aesthetic of the page beyond the vanella HTML look:

    * background color of the page
    * font family and size
    * text color & or background color of tasks (to show whether or not they have been completed)

### Create a Database
The database is created through Postico. Its name is `weekend-to-do-app`.
I will use this name in my database connection configuration on my server.

### Database Structure
I am also including a `database.sql` text file in my repo that will include all of my
`CREATE TABLE` queries so others can re-create my database while testing my application.

### High Level Development Plan
#### Step 1: Initialize Project
    * Make a new git branch to 'initialize' my work ✅
    * Add files and folders to project directory (including .gitignore, HTML, CSS, and JavaScript + jQuery) ✅

##### Front-End:
    * Create the HTML basic structure for the application
    * Make sure all files are sourced into HTML file
        * CSS, jQuery, JavaScript

##### Back-End:
    * Run npm init --yes
    * Make sure "start" script exists in our package.json
    * Run npm install express and pg
    * Create a database using SQL via Postico
    * Create a 'to-do' table using SQL via Postico
    * Include queries on my database.sql text file
    * Wire up database connection in pool.js file
    * Create the minimum code for working Express server in server.js
    * Follow the logic to make the code for remaining files

#### Step 2: Develop Features
    * Create a task
        * Store in database
        * Re-render DOM

    * Delete a task
        * Delete task in database
        * Re-render DOM

    * Complete a task
        * Update task in database
        * Task should be checked off
        * Use CSS to differentiate
        * Re-render DOM

    * CSS! Make it look sch-mancy

#### Step 3: Test, Tweak, Repeat
