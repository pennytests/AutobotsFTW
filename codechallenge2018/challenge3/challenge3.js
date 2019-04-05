require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By
var until = webdriver.until;
var Key = webdriver.Key;
var ele = webdriver.element
var html = webdriver.html
var popular_array = webdriver.element
var j = webdriver.j

describe("challenge3 suite", function(){
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

    // it ("Should search the Copart website for 'exotic'", async function() {
    //     var ele = await driver.findElement(By.xpath('//form[@id="search-form"]//input'));
    //     return ele.sendKeys('exotic' + Key.ENTER)
    // });

    it ("Loop through popular section and print link and text", async function() {
        var popular_array = await driver.findElements(webdriver.By.xpath("//dev[@id='tabTrending']//)a"));
        console.log(popular_array.length);
        for (var i=0; i<popular_array.length; i++){
            //console.log(i); //prints i
            console.log(await popular_array[i].getText() + " - " + ));
            //console.log(await popular_array[i].getAttribute("href"));
            //text = text +
        }
        console.log(text);

        var j=0;
        while(j < popular_array.length){
            j++;
        }

        //return assert.include(html, 'PORSCHE');
    });

});
