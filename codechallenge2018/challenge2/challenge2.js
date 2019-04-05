require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By
var until = webdriver.until;
var Key = webdriver.Key;
var ele = webdriver.element
var html = webdriver.html

describe("challenge2 suite", function(){
   this.timeout(20000);
   var driver;

   before(function () {
       driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
   });

   after(function () {
    return driver.quit();
    });

    it("Should open the Copart website", function() {
    return driver.get("http://www.copart.com");
    });

    it("The title is 'Auto Auction - Copart USA - Salvage Cars For Sale'", function() {
        return driver.getTitle().then(function (title) {
            assert.equal(title, "Auto Auction - Copart USA - Salvage Cars For Sale");
            });
    });
    
    it("The title contains 'Auto Auction - Copart USA'", async function() {
        var title = await driver.getTitle();
        return assert.include(title, "Auto Auction - Copart USA");
        });

    it ("Should search the Copart website for 'exotic'", async function() {
        var ele = await driver.findElement(By.xpath('//form[@id="search-form"]//input'));
        return ele.sendKeys('exotic' + Key.ENTER)
    });

    it ("Should assert 'PORSCHE' is in list of search results", async function() {
        await driver.wait(until.titleContains('exotic'), 10000);
        console.log(await driver.getTitle());
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))));
        var html = await driver.findElement(By.tagName("body")).getAttribute('innerHTML');
        //console.log(html);
        return assert.include(html, 'PORSCHE');
    });

});
