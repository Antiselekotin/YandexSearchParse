const {Builder, By, Key} = require('selenium-webdriver');
const parseSearch = require('./parse');

const parseAllRequests = async(requests) => {
    const driver = new Builder().forBrowser('firefox').build()
    const result = {}
    for await (const req of requests) {
        console.log('Делаем запрос:', req)
        result[req] = await parseSearch(req, driver);
    }

    await driver.quit();
    return result;
}

module.exports = parseAllRequests