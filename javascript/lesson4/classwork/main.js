function spaceBetween() {
    document.write(`</br></br>`)
}

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numberMin(a, b, c) {
    if (a < b && a < c) {
        document.write(`${a}`)
    } else if (b < a && b < c) {
        document.write(`${b}`)
    } else {
        document.write(`${c}`)
    }
}

numberMin(10, 10, 5)
spaceBetween()

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function numberMax(a, b, c) {
    if (a > b && a > c) {
        document.write(`${a}`)
    } else if (b > a && b > c) {
        document.write(`${b}`)
    } else {
        document.write(`${c}`)
    }
}

numberMax(10, 2, 15)
spaceBetween()

// - створити функцію яка повертає найбільше число з масиву
let array1 = [1, 10, 100, 2, 200, 200, 300, 30, 3]

function arrayMaxNumber(array) {
    let max = array[0];
    for (let number of array) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

document.write(`max number - ${arrayMaxNumber(array1)}`)
spaceBetween()


// - створити функцію яка повертає найменьше число з масиву
let array2 = [1, -10, 10, 2, -20, 3, -30, 100]

function arrayMinNumber(array) {
    let min = array[0]
    for (let number of array) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

document.write(`min number - ${arrayMinNumber(array2)}`)
spaceBetween()

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let array3 = [2, 3, 11, 22, 100]

function arraySum(arr) {
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

document.write(`sum = ${arraySum(array3)}`)
spaceBetween()


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let array4 = [5, 6, 1, 10, 20, 400, 200, 1, 1, 2, 4]

function arrayAvg(arr) {
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    sum = sum / arr.length;
    return sum;
}

document.write(`avarage = ${arrayAvg(array4)}`)
spaceBetween()

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let array5 = [1, 5, 999, 20, 6, -16, 8, 0]

function maxAndMin(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let number of arr) {
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    }
    document.write(`max - ${max}</br>`)
    return min;
}

document.write(`min - ${maxAndMin(array5)}`)
spaceBetween()

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function random(lenght) {
    let random = []
    for (i = 0; i < lenght; i++) {
        random.push(Math.floor(Math.random() * 100))
    }
    return random;
}

document.write(random(10))
spaceBetween()


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomLimit(lenght, limit) {
    let random = []
    for (i = 0; i < lenght; i++) {
        random.push(Math.floor(Math.random() * limit))
    }
    return random;
}

document.write(randomLimit(20, 20))
spaceBetween()


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array6 = [`a`, 1, true, 'four']

function reverse(arr) {
    let array6Reverse = []
    for (i = arr.length - 1; i >= 0; i--){
        array6Reverse.push(arr[i])
    }
    return array6Reverse
}
document.write(reverse(array6))

