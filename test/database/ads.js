const { startDatabase } = require('../../src/database/mongo');
const { insertAd, getAds, deleteAd, updateAd } = require('../../src/database/ads');

const chai = require('chai');
let should = chai.should();

let database = null;

describe('MongoDB Ads database', () => {

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

    it("should delete an ad from the database", () => {
        startDatabase().then(async () => {
            let newAdId = await insertAd({ title: 'Ad to be deleted'});
            //console.log(newAdId);
            await deleteAd(newAdId);

            let ads = await getAds();
            ads.length.should.be.eql(0);
        })
    })

    it('should update an ad in the database', () => {
        startDatabase().then(async () => {
            let newAdId = await insertAd({ title: 'Ad to be deleted'});
            //console.log(newAdId);
            let retval = await updateAd(newAdId, { title: 'Updated ad', price: 12.50 });

            let ads = await getAds();
            ads.length.should.be.eql(1);
            ads[0].title.should.be.eql('Updated ad');
        })
    })
})
