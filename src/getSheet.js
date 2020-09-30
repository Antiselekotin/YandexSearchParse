const getSheet = (data, sheetName) => {
    const colNames = []
    result = []
    for(const day in data) {
        colNames.push(day)       
    }
    const maxL = findMaxLength(data, sheetName)
    for(let i = 0; i < maxL; i++) {
        const row = {}
        colNames.forEach(item => row[item] = data[item].data[sheetName][i])
        row['_'] = ' ';
        result.push(row)
    }
    return result
}

module.exports = getSheet;

const findMaxLength = (data, name) => {
    let max = 0;
    for(const day in data) {
        const len = data[day].data[name].length;

        len > max ? max = len: null; 
    }
    return max;
}