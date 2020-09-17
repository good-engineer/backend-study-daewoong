const request = require('request');
const cheerio = require('cheerio');
const {
    resolve
} = require('path');

function removeTabs(str) {
    return str.split('\t').join('').split('\n').join('');
}

module.exports = {
    doScrape: function () {
        request('https://myfair.co/subExpo/detail/59519', (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);

                const title = removeTabs($('.exhi_tit').text());

                const shortTitle = removeTabs($('.exhi_short_tit').text());

                const date = removeTabs($('div.exhi_datetime').text());

                const location = removeTabs($('.exhi_location').text());

                const discription = removeTabs($('.default-introduce').text());

                const products = removeTabs($('.fair-item-list-group').text());

                const visitors = removeTabs($('.fair-visitor-list-group.tag-list-group').text());

                const dateInfo = removeTabs($('.fair-date-info').text());

                const time = removeTabs($('.fair-detailtime-info').text());

                const analytics = removeTabs($('.content-area.fair-analytics-list').find('table').text());

                const address = removeTabs($('.section-content-area').text());

                const pictures = $(".fair-photo-info.hes-gallery").find('img');
                var picturesList = new Array();
                pictures.each((i, j) => {
                    const imgUrl = $(j).attr('data-src')
                    picturesList.push(imgUrl);
                });

                var obj = {
                    title: title,
                    shortTitle: shortTitle,
                    date: date,
                    location: location,
                    discription: discription,
                    products: products,
                    visitors: visitors,
                    dateInfo: dateInfo,
                    time: time,
                    analytics: analytics,
                    address: address,
                    picturesList: picturesList
                };
                var objJSON = JSON.stringify(obj);
                return (objJSON);
            } else {
                return ("check the connection");
            }
        });
    }
};