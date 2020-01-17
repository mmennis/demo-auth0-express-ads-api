// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { startDatabase } = require('./database/mongo')
const { insertAd, getAds } = require('./database/ads');

// initialize app
const app = express();

// Helmet for enhanced security
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// define endpoint for all ads
app.get('/', async (req, res) => {
    res.send(await getAds())
});

startDatabase().then(async () => {

    await insertAd({ title: 'Hello world from inside the app database!!'});

    app.listen(3001, () => {
        console.log('Ads app listening on port 3001');
    });
})

module.exports = app;