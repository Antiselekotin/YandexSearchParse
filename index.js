const requests = require('./request.json');
const parseAllRequests = require('./src/requests');
const getJsonName = require('./src/getJsonName');
const getToday = require('./src/getToday')
const fs = require('fs');


const mainParse = async() => {
    const path = `./stat/${getJsonName()}`;
    const today = getToday()
    if(!fs.existsSync(path)) {
        fs.writeFileSync(path, JSON.stringify({}))
    }
    const json = JSON.parse(fs.readFileSync(path));
    json[today] = await getTodayData()
    fs.writeFileSync(path, JSON.stringify(json));
}
// parseAllRequests(requests)
const getTodayData = async() => {
    const result = {
        "data": await parseAllRequests(requests)
    }
    return result;
}
mainParse()