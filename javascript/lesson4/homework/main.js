// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculatorSquare(a, b) {
    return a * b;
}

let resultSquare = calculatorSquare(20, 30)
console.log(resultSquare)


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calculatorCircle(r) {
    return 3.14 * r ** 2;
}

let resultCircle = calculatorCircle(5)
console.log(resultCircle)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculatorCylinder(h, r) {
    return (3.14 * r ** 2) * h
}

let resultCylinder = calculatorCylinder(10, 5)
console.log(resultCylinder)


// - створити функцію яка приймає масив та виводить кожен його елемент
let array1 = [1, 2, 3, true, 'string']

function arrCreator(arr) {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}

arrCreator(array1)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textCreator(text) {
    document.write(`<p>${text}</p>`)
}

textCreator('some text')
textCreator('another text')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

ulCreator(`як же важко придумувати назви змінних!!! :(`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator2(numberOfLi, text) {
    document.write(`<ul>`);
    for (i = 0; i < numberOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulCreator2(5, 'asd')




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array3 = [1, 2, 3, true, false, 'asd', 'qwe']

function arrCreator2(arr) {
    document.write(`<ol>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ol>`)
}

arrCreator2(array3)

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

function iterator(arr){

    for (let objects of arr) {
        document.write(`<div>${objects.id} ${objects.name} ${objects.age}</div>`)
    }

}

iterator(users)