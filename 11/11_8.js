const browserManager = require('./BrowserManager');
const manager = new browserManager();
const searchModule = require('./SerchInputModule');
const ToBacketModule = require('./AddToBacketModule');

const { By,Key } = require('selenium-webdriver');

async function searchSamsungDevice() {

    try {
        await manager.open('https://www.samsung.com/us/');

        const searchInputModule = new searchModule(manager.driver);
        await searchInputModule.searchClick('galaxy s24 ultra');
        await manager.driver.sleep(4000);
        manager.logger('Поиск произошел успешно');

        const addToBacketModule = new ToBacketModule(manager.driver);
        await addToBacketModule.AddToBasketOptions();
        manager.logger('Добавлено в корзину');

        try {
            const promoCodeInput = await manager.driver.findElement(By.css('input[placeholder="Enter promo code"]'));
            await promoCodeInput.sendKeys('ывлоадывлоа', Key.RETURN);
            await manager.driver.sleep(4000);

            const promoCodeError = await manager.driver.wait(until.elementLocated(By.xpath("//span[text()='Promo code not valid.']")), 5000);
          
            manager.logger('Валидация промокода не прошла успешно');
        } catch  {
            manager.logger('Валидация промокода прошла успешно');
        }

    } catch (error) {
        manager.logger('Ошибка: ' + error);
    } finally {
        await manager.quit();
    }



}
searchSamsungDevice();