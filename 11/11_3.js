const browserManager = require('./BrowserManager');
const manager = new browserManager();
const SearchServiseModule = require('./SearchServiceModule');

const { By,Key,until } = require('selenium-webdriver');


    
async function searchSamsungDevice() {
    await manager.open('https://www.samsung.com/ru/');

    const searchService = new SearchServiseModule(manager.driver);

    try {
       
        await searchService.searchService('Мобильные устройства','Смартфоны / Телефоны');

    }catch(error){
        await manager.logger(error);
    } finally {
        await manager.quit();
 }
}

searchSamsungDevice();
