const { By, until,Builder,Key } = require('selenium-webdriver');

 class AddToBacketModule {
    constructor(driver) {
        this.driver = driver;
    }

    async AddToBasketOptions(){
        const buyNowButton = await this.driver.wait(until.elementLocated(By.css('.search-result-global__result-cta__link.js-buy-now')), 10000);
        await buyNowButton.click();
    
    await this.driver.sleep(3000);
    
    let noButton = await this.driver.findElement(By.xpath("//*[text()='No']"));
    await noButton.click();
    await this.driver.sleep(3000);
    
    let noCoverageButton = await this.driver.findElement(By.xpath("//*[text()='No coverage']"));
    await noCoverageButton.click();

    
let continueButton = await this.driver.findElement(By.css('.Button_button__bVLLA'));
await continueButton.click();
await this.driver.sleep(3000);

let skipAddButton = await this.driver.findElement(By.xpath("//*[text()='Skip add-ons']"));
await skipAddButton.click();

await this.driver.sleep(3000);


let span = await this.driver.findElement(By.css('.go-to-cart-from-checkout'));
await span.click();
await this.driver.sleep(3000);
    }
}

module.exports = AddToBacketModule;