$epicore-Task
===============

$Simple landing page Using React and a simple implementation of its backend using NodeJs, Express and GraphQL.

======================

Backend:
    it's been implemented Using Basic setup of Node, Express & GraphQl.

======================

error handling:
    as it's so basic the only error handler i need is for getting the root page (./).

======================

It's so easy to install the front end (React App):
    Clone the project.
    got into client folder => src folder => Open your terminal.
    write in your terminal (npm install) to install all required packages.
    then write npm start and you will view the task on localhost port #300.

======================

UI implementation:
    I've developed 6 function components and imported them into App component.
    I divded them for reusability and also to make it easy to style and debugging the.
    for styling each component has its css module.

======================

Transition to login page:
    I used useState Hook to hide the elements of first page and show the elements of the login page.
    the transition rerenders the create component only for better performance.

======================

Testing:
    I used jest testing library for my tests.
    I tested if the email element renders correctly through its placeholder attribute.
    To test the transition has been done correctly after clicking the login button I checked the number of buttons before and after onClick event

======================
