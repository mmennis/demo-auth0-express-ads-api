// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// initialize app
const app = express();

const ads = [
    { title: "Hello world!"}
];

// Helmet for enhanced security
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// define endpoint for all ads
app.get('/', (req, res) => {
    res.send(ads);
});

app.listen(3001, () => {
    console.log('Ads app listening on port 3001');
});