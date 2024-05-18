const browserManager = require('./BrowserManager');
const manager = new browserManager();
const searchModule = require('./SerchInputModule');
const ToBacketModule = require('./AddToBacketModule');
const RemoveFromBacketModule = require('./RemoveFromBacketModule');

const { By,Key } = require('selenium-webdriver');

async function searchSamsungDevice() {

    try {
        await manager.open('https://www.samsung.com/us/');
        const removeFromBacketModule = new RemoveFromBacketModule(manager.driver);

        const searchInputModule = new searchModule(manager.driver);
        await searchInputModule.searchClick('galaxy s24 ultra');
        await manager.driver.sleep(4000);
        manager.logger('Поиск произошел успешно');

        const addToBacketModule = new ToBacketModule(manager.driver);
        await addToBacketModule.AddToBasketOptions();
        manager.logger('Добавлено в корзину');

        try {
            const isGalaxy = await manager.driver.findElement(By.xpath("//*[contains(text(), 'Galaxy S24 Ultra')]"));
            manager.logger('Элемент найден на странице');
        } catch (error) {
            manager.logger('Элемент не найден на странице');
        }
       await removeFromBacketModule.RemoveFromBasket();

    } catch (error) {
        manager.logger('Ошибка: ' + error);
    } finally {
        await manager.quit();
    }



}
searchSamsungDevice();