function spaceBetween() {
    document.write(`</br></br>`)
}
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function one(a, b) {
    if (a !== undefined && b !== undefined) {
        document.write(`${a}` + `${b}`)
    } else {
        document.write(`${a}`)
    }
}

one(10)
spaceBetween()


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let array1 = [1,2,3,4]
let array2 = [25,35,45,55]


function summator(arr1) {
    let arraySum = []
    for (i = 0; i < arr1.length; i++) {
        arraySum.push(array1[i] + array2[i])
    }
    return arraySum
}
document.write(summator(array1, array2))
spaceBetween()
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 14}, {model: 'Camry'}]  ===> [ name, age, model ]
let arrayObjects = [{name: 'Dima', age: 14}, {model: 'Camry'}]

function arrayOfObjectsCreator (arr){
    let keys =[]
    for (let arrblock of arr) {
            for (let arrElement in arrblock) {
            keys.push(arrElement)
    }
    }
    return keys
}
console.log(arrayOfObjectsCreator(arrayObjects))
spaceBetween()

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function arrayOfObjectsCreator2 (arr){
    let keys2 =[]
    for (let arrblock of arr) {
        for (let arrElement in arrblock) {
            keys2.push(arrblock[arrElement])
        }
    }
    return keys2
}
console.log(arrayOfObjectsCreator2(arrayObjects))