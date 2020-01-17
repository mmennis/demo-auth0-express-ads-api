// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { startDatabase } = require('./database/mongo')
const { insertAd, getAds, deleteAd, updateAd } = require('./database/ads');

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

app.post('/', async (req, res) => {
    const newAd = req.body;
    await insertAd(newAd);
    res.send({ message: 'New ad inserted'});
});

app.delete('/:id', (req, res) => {
    await deleteAd(req.params.id);
    res.send({ message: 'Ad removed'});
});

app.put('/:id', (req, res) => {
    const updatedAd = req.body;
    await updateAd(req.params.id, updatedAd);
    res.send({ message: 'Ad updated'});
});

startDatabase().then(async () => {

    await insertAd({ title: 'Hello world from inside the app database!!'});

    app.listen(3001, () => {
        console.log('Ads app listening on port 3001');
    });
})

module.exports = app;