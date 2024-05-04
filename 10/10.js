const { Builder } = require('selenium-webdriver');
const SamsungHomePage = require('./SamsungHomePage');
const SamsungServicePage = require('./SamsungServicePage');

async function searchSamsungDevice() {
    const driver = new Builder().forBrowser('chrome').build();
    const samsungHomePage = new SamsungHomePage(driver);
    const samsungServicePage = new SamsungServicePage(driver);
    
    try {
        await samsungHomePage.open();
        await samsungHomePage.goToServiceCenters();

        await samsungServicePage.goToMobileDevices();
        await samsungServicePage.goToSmartphones();

        console.log('Успешно перешли к разделу "СМАРТФОНЫ/ТЕЛЕФОНЫ".');

        if(await samsungServicePage.checkNoServiceCentersMessage()){
            console.log('Сервисов не найдено');
        }
        else{
            console.log('Тест выполнен успешно и сервисы найдены!');
        }

    } finally {
        await driver.quit();
    }
}

searchSamsungDevice();
