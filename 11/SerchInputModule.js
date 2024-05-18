const { By, until,Builder,Key } = require('selenium-webdriver');
const browserManager = require('./BrowserManager');
const manager = new browserManager();
 class SearchInputModule {
    constructor(driver) {
        this.driver = driver;
    }

    async searchClick(name){
        console.log('Использование модуля для поиска');

        await this.driver.sleep(3000);

        let searchButton = await this.driver.findElement(By.css('.nv00-gnb__utility-btn.gnb__search-btn-js'));
        await searchButton.click();

        let searchInput = await this.driver.findElement(By.id('gnb-search-keyword'));
        await searchInput.sendKeys(name, Key.ENTER);
       
    }
}

module.exports = SearchInputModule;