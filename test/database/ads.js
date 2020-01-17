const { startDatabase } = require('../../src/database/mongo');
const { insertAd, getAds } = require('../../src/database/ads');

const chai = require('chai');
let should = chai.should();

let database = null;

describe('MongoDB Ads database', () => {
    // beforeEach(() => {
    //     database = await startDatabase();
    // })

    it("should insert an ad into the database", () => {
        startDatabase().then(async () => {
            await insertAd({ title: 'Hello from new in memory database'});
        })
    })

    it("should get all ads from the database", () => {
        startDatabase().then(async () => {
            await insertAd({ title: 'Hello from new in memory database'});

            let ads = await getAds();
            //console.log(ads);//
            ads.length.should.be.eql(1)
        })
    })
})
