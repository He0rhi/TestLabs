const { By, until,Builder,Key } = require('selenium-webdriver');

 class BrowserManager {
    constructor() {
        this.driver = null;
    }
    async logger(message){
        console.log(message);
    }
    async open(url) {
        if (!this.driver) {
            this.driver = await new Builder().forBrowser('chrome').build();
        }
        await this.driver.get(url);
    }

    async quit() {
        console.log('Использование менеджера для выхода');
        if (this.driver) {
            await this.driver.quit();
            this.driver = null;
        }
    }
   
}

module.exports = BrowserManager;