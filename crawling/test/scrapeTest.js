const assert = require('chai').assert;
const {
    doScrape
} = require('../scrape');

describe('Scrape', function () {
    it('scrape should return a JSON String', function () {
        assert.typeOf(doScrape(), 'string');
    });
})