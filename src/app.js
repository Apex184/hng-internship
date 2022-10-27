const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

const firstRoute = require('./route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.use('/', firstRoute);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

