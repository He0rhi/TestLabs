const { By, until } = require('selenium-webdriver');

class SamsungServicePage {
    constructor(driver) {
        this.driver = driver;
    }

    async goToMobileDevices() {
        const mobileDevicesElement = await this.driver.wait(until.elementLocated(By.xpath("//li[contains(text(), 'Мобильные устройства')]")), 5000);
        await this.driver.actions().move({origin: mobileDevicesElement}).perform();
    }

    async goToSmartphones() {
        const smartphonesElement = await this.driver.wait(until.elementLocated(By.xpath("//li[contains(text(), 'Смартфоны / Телефоны')]")), 5000);
        await smartphonesElement.click();
        await this.driver.sleep(2000);
    }

    async checkNoServiceCentersMessage() {
        const noServiceCentersElements = await this.driver.findElements(By.xpath("//li[contains(text(), 'К сожалению, в вашем районе сервисных центров не найдено')]"));
        return noServiceCentersElements.length > 0;
    }
}

module.exports = SamsungServicePage;
