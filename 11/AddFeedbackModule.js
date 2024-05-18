const { By, until,Builder,Key } = require('selenium-webdriver');
const browserManager = require('./BrowserManager');
const manager = new browserManager();
 class AddFeedbackModule {
    constructor(driver) {
        this.driver = driver;
    }

    async addFeedbackFunc(scale_recommend, mainfactor,exp,scale_proud){
        try {

          
           
            await this.driver.sleep(3000);
            const syrveyButton = await this.driver.findElement(By.xpath("//*[text()='Begin Survey']"));
            await syrveyButton.click();
            await this.driver.sleep(3000);
        
            const estimationButton = await this.driver.findElement(By.id(`onf_q_samsung_ltr_scale_${scale_recommend}`));
            await estimationButton.click();
        
        
        
        const factorButton = await this.driver.findElement(By.xpath(`//*[text()='${mainfactor}']`));
        await factorButton.click();
        
        const nextButton = await this.driver.findElement(By.xpath("//*[text()='Next']"));
        await nextButton.click();
        
        await this.driver.sleep(3000);
        
        const textarea = await this.driver.findElement(By.id('spl_q_samsung_ltr_reason_cmt'));
        await textarea.sendKeys(`${exp}`);
        const nextButton1 = await this.driver.findElement(By.xpath("//*[text()='Next']"));
        await nextButton1.click();
        await this.driver.sleep(3000);
        const proudButton = await this.driver.findElement(By.id(`onf_q_samsung_proud_to_own_scale_${scale_proud}`));
        await proudButton.click();
        
        const finishButton = await this.driver.findElement(By.xpath("//*[text()='Submit']"));
        await finishButton.click();
        await this.driver.sleep(3000);
        
        const isEndCheck = await this.driver.findElements(By.xpath("//*[text()='Thank you for taking the time to share your thoughts about your recent experience.']"));
                if( isEndCheck.length > 0){
                manager.logger('Опрос не отправлен');}else{
                manager.logger('Опрос отправлен');
        }
         
        }catch(error){
        
        
            manager.logger(error);
        }
    }
}

module.exports = AddFeedbackModule;