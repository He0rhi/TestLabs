const { Builder, By, Key, until } = require('selenium-webdriver');

async function searchSamsungDevice() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.samsung.com/kz_ru'); // Открываем сайт Samsung
        const searchButton = await driver.findElement(By.className('nv00-gnb__utility-btn gnb__search-btn-js'));
        await searchButton.click(); // Нажимаем на кнопку лупы
        const searchInput = await driver.findElement(By.className('gnb-search__input'));
        await driver.wait(until.elementIsVisible(searchInput), 5000); // Ждем, пока поле поиска не станет видимым
  
        await driver.wait(searchInput.sendKeys('Galaxy s24 Ultra', Key.RETURN),5000); // Вводим текст в поле поиска и нажимаем Enter

   // Нахождение элемента по атрибуту href
const linkHref = '/kz_ru/smartphones/galaxy-s24-ultra/buy/?modelCode=SM-S928BLGPSKZ';


const linkElement = await driver.wait(until.elementLocated(By.css(`a[href="${linkHref}"]`)), 10000);
if(linkElement.isDisplayed){
    console.log('Товар найден.');
}
else{
    console.log('ОШИБКА');

}

    } finally {
        await driver.quit(); // Закрываем браузер
    }
}

searchSamsungDevice();

 
