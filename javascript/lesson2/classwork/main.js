let number1 = +prompt('введіть перше число')
let number2 = +prompt('введіть друге число')
if (number1 > number2) {
    document.write(number1)
} else if (number1 < number2) {
    document.write(number2)
} else {
    document.write('числа рівні')
}


let appartment = +prompt('введіть номер квартири')
if (appartment < 1 || appartment > 90) {
    document.write('</br>такої квартири немає')
} else if (appartment < 21) {
    document.write('</br>перший під\'їзд')
} else if (appartment < 49) {
    document.write('</br>другий під\'їзд')
} else {
    document.write('</br>третій під\'їзд')
}


let number = +prompt('введіть число')
if (number === 10){
    document.write('</br>вірно')
} else {
    document.write('</br> не вірно')
}

let x = []
if (typeof x === "number"){
    document.write('</br>1')
} else if (typeof x === "string"){
    document.write('</br>2')
} else if (typeof x === "boolean"){
    document.write('</br>3')
} else if (typeof x === "object"){
    document.write('</br>4')
} else  {
    document.write('</br>1 не зрозуміло що ви ввели')
}


let temparature = +prompt('яка темпаратура на вулиці?')
if (temparature >= 10 && temparature <= 22){
    document.write('</br>йдемо вчитися')
} else  {
    document.write('</br>сидимо вдома')
}




let game = +prompt('Введіть число')
switch (game) {
    case 1:
        document.write('</br> ви виграли квартиру')
        break;
    case 2:
        document.write('</br> ви виграли машину')
        break;
    case 3:
        document.write('</br> ви виграли перину')
        break;
    case 4:
        document.write('</br> ви виграли каляску')
        break;
    case 5:
        document.write('</br> ви виграли пляшку')
        break;
    default:
        document.write('</br> ви не виграли у тещі');
}