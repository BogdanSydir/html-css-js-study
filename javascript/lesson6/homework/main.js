// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world'
let b = 'lorem ipsum'
let c = 'javascript is cool'

console.log(a.length)
console.log(b.length)
console.log(c.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase())
console.log(b.toUpperCase())
console.log(c.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let A = 'HELLO WORLD'
let B = 'LOREM IPSUM'
let C = 'JAVASCRIPT IS COOL'

console.log(A.toLowerCase())
console.log(B.toLowerCase())
console.log(C.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   '
console.log(dirtyStr.substring(1, 13))
console.log(dirtyStr.trim(' ', ''))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Каждый охотник желает знать';
let stringToarray = str.split(' ');

console.log(stringToarray); // ['Каждый', 'охотник', 'желает', 'знать']


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => {
    return str.substring(0, length)
}
document.write(delete_characters(str, 7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase()
document.write(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let row = 'one two three'
let firstUp = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(firstUp(row))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
console.log(capitalize(row))