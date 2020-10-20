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
            const audience = $('span.label.label-success').text().split('5')[1];
            const startDate = $('div.lead.mb-0').find('span').attr('content');
            const endDate = $('div.lead.mb-0').find('span').next().attr('content');
            const year = startDate.split('-')[0];
            const month = startDate.split('-')[1];
            const country = $('div.lead.mb-0').find('a').eq(1).text();
            const hallName = $('div.col-md-6').find('h3').text().trim();
            const location = $('div.col-md-6').find('p').first().text();
            const description = $('p.desc.mng.word-break').text();
            const startTime = $('table.table.noBorder.mng').find('br').text(); //todo
            const endTime = 0; //todo
            const status = $('small.block.text-danger').text();
            const industry = $('td.hvrout2').find('a').text(); // should be loop!
            const cycle = 0; //todo
            const orgName = 0; //todo
            const orgMail = 0; //todo

        }
        var organizers = { orgName: orgName, orgMail: orgMail };
        const industeries = { industry };
        var times = { startTime: startTime, endTime: endTime, status: status };
        var obj = {
            title: title,
            audience: audience,
            startDate: tartDate,
            endDate: endDate,
            year: year,
            month: month,
            country: country,
            hallName: hallName,
            location: location,
            description: description,
            times: times,
            industries: industries,
            cycle: cycle,
            organizers: organizers
        };
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


