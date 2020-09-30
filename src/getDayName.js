const getDayName = (dayNum) => {
    switch(dayNum) {
        case 0: return "Воскресенье"; break;
        case 1: return "Понедельник"; break;
        case 2: return "Вторник"; break;
        case 3: return "Среда"; break;
        case 4: return "Четверг"; break;
        case 5: return "Пятница"; break;
        case 6: return "Суббота"; break;
    }
}

module.exports = getDayName;