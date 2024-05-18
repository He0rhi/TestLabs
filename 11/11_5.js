const browserManager = require('./BrowserManager');
const manager = new browserManager();

const { By,Key } = require('selenium-webdriver');

async function searchSamsungDevice() {

try {

    await manager.open('https://www.samsung.com/kz_ru/');
  
    
    await manager.driver.sleep(3000);

    let inputElement = await manager.driver.findElement(By.id('home-page-search'));
await inputElement.sendKeys('ofhwhefpowfh', Key.ENTER);
await manager.driver.sleep(3000);

const surveyButton = await manager.driver.findElements(By.xpath("//*[text()='Проверьте правописание и повторите поиск.']"));
if (surveyButton.length > 0) {
    manager.logger("Элемент найден");
} else {
    manager.logger("Элемент не найден");
}
await manager.driver.sleep(3000);


    await manager.quit();
}catch(error){

    await manager.quit();
    manager.logger(error);
}
}
searchSamsungDevice();