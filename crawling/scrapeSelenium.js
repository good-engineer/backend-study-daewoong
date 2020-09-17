const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

function getBoothCost() {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    By = webdriver.By;
    var driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    let util = webdriver.util;
    driver.get('https://myfair.co/subExpo/detail/59519');
    driver.findElement(By.xpath("//li/a[normalize-space(.)='부스 참가 방법']")).click();
    const info = driver.findElement(By.xpath("//div[@class='booth-info']"));
    return info.getText();
}

getBoothCost().then((result) => {
    console.log(result)
})