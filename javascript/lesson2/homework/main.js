let time = Math.floor(Math.random() * 59);
console.log(time)

if (time < 15) {
    console.log('перша чверть');
} else if (time < 30) {
    console.log('друга чверть');
} else if (time < 45) {
    console.log('третя чверть');
} else if (time < 60) {
    console.log('четверта чверть');
}


let days = Math.floor(Math.random() * 31) + 1;
console.log(days)

if (days < 12) {
    console.log('перша декада');
} else if (days < 22) {
    console.log('друга декада');
} else if (days < 32) {
    console.log('третя декада');
}


let test = Math.random();
console.log(test)
if (test <= 0.5) {
    console.log('Вірно')
} else {
    console.log('Неправильно')
}
let test2 = Math.random() <= 0.5 ? 'Вірно' : 'Неправильно';
console.log(test2)


let a = +prompt()
if (a !== 0) {
    document.write('Вірно </br>')
} else {
    document.write('Невірно </br>')
}


let week = +prompt('Введіть порядковий номер дня тижня')
switch (week) {
    case 1:
        document.write('план на понеділок </br>')
        break;
    case 2:
        document.write('план на вівторок </br>')
        break;
    case 3:
        document.write('план на середу </br>')
        break;
    case 4:
        document.write('план на четвер </br>')
        break;
    case 5:
        document.write('план на п\'ятницю </br>')
        break;
    case 6:
        document.write('план на суботу </br>')
        break;
    case 7:
        document.write('план на неділю </br>')
        break;
    default:
        document.write('помилка </br>');
}


let yearNumber = +prompt('введіть рік')
if (Number.isInteger((yearNumber + 4) / 4)) {
    document.write('Рік високосний </br>')
} else {
    document.write('Рік не високосний </br>')
}

let jsName = prompt('Яка офіційна назва JavaScript?')
if (jsName === 'ECMAScript'){
    document.write('Правильно! </br>')
} else {
    document.write('Не знаєте? ECMAScript! </br>')
}
