const { By, until } = require('selenium-webdriver');

class SamsungHomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get('https://www.samsung.com/ru');
    }

    async goToServiceCenters() {
        const toService = await this.driver.wait(until.elementLocated(By.xpath("//a[text()='Сервисные центры']")),3000);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", toService);
        await this.driver.sleep(2000);
        await toService.click();
    }

}

module.exports = SamsungHomePage;
