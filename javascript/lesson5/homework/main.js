function spaceBetween() {
    document.write(`</br></br>`)
}

// - створити функцію яка обчислює та повертає площу прямокутника висотою
let square = (a, b) => a * b;
document.write(square(2, 5))
spaceBetween()

// - створити функцію яка обчислює та повертає площу кола
let circle = (r) => 3.14 * r ** 2;
document.write(circle(5))
spaceBetween()

// - створити функцію яка обчислює та повертає площу циліндру
let cylinder = (h, r) => h* 3.14* r**2;
document.write(cylinder(10, 5))
spaceBetween()

// - створити функцію яка приймає масив та виводить кожен його елемент
let array1 = [1, 2, true, 'string']

let iterator = (arr) => {
    for (let arrElement of arr) {
        document.write(`${arrElement}</br>`)
    }
}
iterator(array1)
spaceBetween()

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraphCreator = (text) => document.write(`<p>${text}</p>`);
paragraphCreator('some text')
paragraphCreator('more text')
spaceBetween()

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulCreator = (text) =>{
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
ulCreator('some text')
spaceBetween()

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulCreator2 = (text, lenght) =>{
    document.write(`<ul>`)
    for (i = 0; i < lenght; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulCreator2("some txt", 10)
spaceBetween()

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array2 = [1, 'string', true, 2, 5, false]

let listCreator = (arr) => {
    document.write(`<ul>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
listCreator(array2)
spaceBetween()

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: 'vasya',
        age: 19
    },
    {
        id: 2,
        name: 'petya',
        age: 22
    },
    {
        id: 3,
        name: 'max',
        age: 25
    },
    {
        id: 4,
        name: 'andriy',
        age: 14
    },
];

let divCreator = (arr) => {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}
divCreator(users)