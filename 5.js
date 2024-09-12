function formatDate(date) {
    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = date.getFullYear();

    let hour = date.getHours();
    if (hour < 10) hour = '0' + hour;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;
    
    return `${day}.${month}.${year} ${hour}:${min}`;
}

function daysMath(date1, date2) {
    let ms = Math.abs(date2 - date1);
    return Math.floor(ms / 86400000);
}

let date1 = new Date('2023-01-01');
let date2 = new Date('2023-01-10');

console.log(formatDate(date1));
console.log(daysMath(date1, date2));
