const { By, until,Builder,Key } = require('selenium-webdriver');
const browserManager = require('./BrowserManager');
const manager = new browserManager();
 class RemoveFromBacketModule {
    constructor(driver) {
        this.driver = driver;
    }

    async RemoveFromBasket(){
        try{
            let removeFromBacketButton = await this.driver.findElement(By.css('.btn.btn-remove'));
            await removeFromBacketButton.click();
            manager.logger('Товар удален из корзины');
            
            }
            catch(error){
                manager.logger(error);
            }
    }
}

module.exports = RemoveFromBacketModule;