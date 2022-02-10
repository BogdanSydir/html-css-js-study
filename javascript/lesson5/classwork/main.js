function spaceBetween() {
    document.write(`</br></br>`)
}

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a, b, c) => {
    if (a < b && a < c) {
        document.write(a)
    } else if (b < a && b < c) {
        document.write(b)
    } else {
        document.write(c)
    }
}
min(5, 4, 3)
spaceBetween()

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    if (a > b && a > c) {
        document.write(a)
    } else if (b > a && b > c) {
        document.write(b)
    } else {
        document.write(c)
    }
}
max(5, 4, 3)
spaceBetween()

// - створити функцію яка повертає найбільше число з масиву
let nums = [1, 2, 10, 6 ,0]

let maxNum = (arr) => {
    let max = arr[0];
    for (i = 0; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
document.write(maxNum(nums))
spaceBetween()

// - створити функцію яка повертає найменьше число з масиву
let minNum = (arr) => {
    let min = arr[0];
    for (i = 0; i< arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    return min;
}
document.write(minNum(nums))
spaceBetween()

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
document.write(sum(nums))
spaceBetween()

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let avarage = (arr) => {
    let avg = 0;
    for (i = 0; i < arr.length; i++){
        avg = avg + arr[i]
    }
    avg = avg / arr.length;
    return avg;
}
document.write(avarage(nums))
spaceBetween()

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minMax = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for (i = 0; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
        if (arr[i] < min){
            min = arr[i]
        }
    }
    document.write(max)
    return min;
}
document.write(`</br>${minMax(nums)}`)
spaceBetween()

// - створити функцію яка заповнює масив рандомними числами
let random = (arrLenght) => {
    let randomArr = []
    for (i = 0; i < arrLenght; i++){
        randomArr.push(Math.round(Math.random()*1000))
    }
    return randomArr
}
document.write(random(10))
spaceBetween()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let random2 = (arrLenght, limit) =>{
    let randomArr = []
    for (i = 0; i < arrLenght; i++){
        randomArr.push(Math.round(Math.random()*limit))
    }
    return randomArr
}
document.write(random2(10, 50))
spaceBetween()

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse = (arr) => {
    let reversed = []
    for (i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed;
}
document.write(reverse(nums))