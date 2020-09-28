const {Builder, By, Key} = require('selenium-webdriver');

const parseSearch = async(request, driver) => {
    
    try {
        await driver.get('https://yandex.ru');
        await driver.findElement(By.css('#text')).sendKeys(request, Key.RETURN);

        await driver.sleep(1500)
        const result = await driver.executeScript(
            `
                const result = [];
                const links = document.querySelectorAll('a.link.link_theme_normal.organic__url');
                links.forEach((item) => result.push(item.getAttribute('href')));
                return result;
            `
        )
        const final = [];
        for await (let link of result) {
            if(link.indexOf('count') + 1) {
                await driver.get(link);
                await driver.sleep(1000);
                link = await driver.getCurrentUrl();
                const ind = link.indexOf('?');
                if(ind + 1) {
                    link = link.slice(0, ind)
                }
            }
            final.push(link)
                
        }
        return final;
    } catch(e) {
        console.log(e)
    }
}

module.exports = parseSearch