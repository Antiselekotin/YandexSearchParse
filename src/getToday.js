const getToday = () => {
    const date = new Date()
    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const day = date.getDate() < 10 ? `0${date.getDate}`: date.getDate();
    const str = `${date.getFullYear()}-${month}-${day}`
    return str;
}

module.exports = getToday;