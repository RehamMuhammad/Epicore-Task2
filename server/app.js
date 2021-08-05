//Express & GraphQl Setup.
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const app = express();

app.use('/graphql',graphqlHTTP({

}));

app.listen(8000, () => {
console.log('iam now listening for requests on port 8000');
});

//Handing the error while getting the main page (/) instead of (Cannot GET /) message

app.get('/', function (req, res) {
    throw new Error("The page has been BROKEN we're working on that now ") // Express catches this err by itself.
})

