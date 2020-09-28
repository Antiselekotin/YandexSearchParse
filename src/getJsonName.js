const getJsonName = () => {
    const date = new Date()
    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const str = `${date.getFullYear()}-${month}.json`
    return str;
}

module.exports = getJsonName;