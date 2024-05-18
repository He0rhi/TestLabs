const { By, until,Builder,Key } = require('selenium-webdriver');
const browserManager = require('./BrowserManager');
const manager = new browserManager();
 class SearchServiseModule {
    constructor(driver) {
        this.driver = driver;
    }

    async searchService(servicechapter, servicesubchapter){
         try {
      

        const toService = await this.driver.wait(until.elementLocated(By.xpath("//a[text()='Сервисные центры']")),3000);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", toService);
        await this.driver.sleep(2000);
        await toService.click();
        const mobileDevicesElement = await this.driver.wait(until.elementLocated(By.xpath(`//li[contains(text(),'${servicechapter}' )]`)), 5000);
        await this.driver.actions().move({origin: mobileDevicesElement}).perform();
        const smartphonesElement = await this.driver.wait(until.elementLocated(By.xpath(`//li[contains(text(),'${servicesubchapter}' )]`)), 5000);
        await smartphonesElement.click();
        await this.driver.sleep(2000);
        manager.logger('Успешно перешли к разделу "СМАРТФОНЫ/ТЕЛЕФОНЫ".');
try{
        const noServiceCentersElements = await this.driver.findElements(By.xpath("//li[contains(text(), 'К сожалению, в вашем районе сервисных центров не найдено')]"));
        if( noServiceCentersElements.length > 0){
        manager.logger('Сервисов не найдено');}else{
        manager.logger('Тест выполнен успешно и сервисы найдены!');

        }
    }catch(error){
manager.logger(error);
    }

    }  catch(error){
        manager.logger(error);
            }
    }
}

module.exports = SearchServiseModule;