// https://www.geeksforgeeks.org/nodejs-web-crawling-using-cheerio/

const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');

const URL = "https://10times.com/erbil-agro-food";

const {
    resolve
} = require('path');
const { title } = require('process');

/*
function removeTabs(str) {
    return str.split('\t').join('').split('\n').join('');
}
*/

const doScrape = () => {
    request(URL, function (err, res, html) {
        if (err) {
            console.log(err, "error occured while hitting URL");
        }
        else {
            // TODO:
            console.log("start");
            const $ = cheerio.load(html);
            const title = $('h1').first().text();
            // const audience = 
            // const startDate =
            // const endDate =
            // const year =
            // const month =
            // const country =
            // const hallName =
            // const location =
            // const description =
            // const times =
            // const industries =
            // const cycle =
            // const organizers =
        }
        var obj = {
            title: title,
            // audience : audience,
            // startDate : tartDate,
            // endDate : endDate,
            // year : year,
            // month : month,
            // country : country,
            // hallName : hallName,
            // location : location,
            // description : description,
            // times : times,
            // industries : industries,
            // cycle : cycle,
            // organizers : organizers,
        };
        console.log(title);
        var objJSON = JSON.stringify(obj);
        return (objJSON);
    });
}
exports.doScrape = doScrape;

const storeData = (obj) => {
    /**==============================================
     * todo                  TODO
     *   store data
     *   
     *   
     *
     *=============================================**/

}
exports.storeData = storeData;

doScrape();
//storeData(doscape);


