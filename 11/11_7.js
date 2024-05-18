const browserManager = require('./BrowserManager');
const manager = new browserManager();
const ChatWithUsModule = require('./ChatWithUsModule');

const { By,Key,until } = require('selenium-webdriver');

async function searchSamsungDevice() {

try {
    const chatWithUs = new ChatWithUsModule(manager.driver);
    await manager.open('https://www.samsung.com/us/');
  
    await manager.driver.sleep(2000);
    chatWithUs.ToChatWithUs();

    await manager.driver.sleep(2000);

    const checkCatrgoryButton = await manager.driver.findElement(By.xpath("//*[text()='Replace TV remote']"));


    checkCatrgoryButton.click();
    await manager.driver.sleep(2000);

    const elements = await manager.driver.findElements(By.className('HitchhikerStandard-titleLink'));
if (elements.length > 0) {
    manager.logger("Сайт нашел данные по категории");
} else {
    manager.logger("Сайт нашел данные по категории");
}

await manager.driver.sleep(3000);


    await manager.quit();
}catch(error){
    await manager.logger(error);
} finally {
    await manager.quit();
}}
searchSamsungDevice();