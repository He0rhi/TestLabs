const browserManager = require('./BrowserManager');
const manager = new browserManager();
const ChatWithUsModule = require('./ChatWithUsModule');

const { By,Key,until } = require('selenium-webdriver');

async function searchSamsungDevice() {

try {

    await manager.open('https://www.samsung.com/us/');
    const chatWithUs = new ChatWithUsModule(manager.driver);

    await manager.driver.sleep(2000);
    await chatWithUs.ToChatWithUs();

    await manager.driver.sleep(2000);

    let searchButton = await manager.driver.findElement(By.id('yxt-SearchBar-input--SearchBar'));
    await searchButton.sendKeys('enecc309c34hc04c', Key.ENTER);


    await manager.driver.sleep(2000);



    const elements = await manager.driver.findElements(By.className('HitchhikerStandard-titleLink'));
if (elements.length > 0) {
    manager.logger("Неверный ввод не дал положительного результата");
} else {
    manager.logger("Сайт нашел данные по неверному вводу");
}

await manager.driver.sleep(3000);



}catch(error){
    await manager.logger(error);
} finally {
    await manager.quit();
}}
searchSamsungDevice();