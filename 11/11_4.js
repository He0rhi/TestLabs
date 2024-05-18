const browserManager = require('./BrowserManager');
const manager = new browserManager();
const AddFeedbackModule = require('./AddFeedbackModule');
const { By,Key } = require('selenium-webdriver');

async function AddFeedback() {
    await manager.open('https://survey3.medallia.com/?web&c=1&lng=en');
    const addFeedback = new AddFeedbackModule(manager.driver);
    try {
       
        await addFeedback.addFeedbackFunc('10','Web design & Navigation (Page design, style, menu)','I liked everything','10');

    }catch(error){
        await manager.logger(error);
    } finally {
        await manager.quit();
 }

}
AddFeedback();