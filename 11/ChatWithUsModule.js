const { By, until,Builder,Key } = require('selenium-webdriver');
const browserManager = require('./BrowserManager');
const manager = new browserManager();
 class ChatWithUsModule {
    constructor(driver) {
        this.driver = driver;
    }

    async ToChatWithUs(){
        try {

          
          
    const toService = await this.driver.wait(until.elementLocated(By.xpath("//a[text()='Chat with Us']")),3000);
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", toService);
    await this.driver.sleep(2000);
    await toService.click();
        }catch(error){
        
        
            manager.logger(error);
        }
    }
}

module.exports = ChatWithUsModule;