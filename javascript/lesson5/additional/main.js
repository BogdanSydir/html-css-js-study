function spaceBetween() {
    document.write(`</br></br>`)
}

// - Дано натуральное число n. Выведите все числа от 1 до n.
let fn = (n) => {
    for (i = 1; i < n; i++) {
        document.write(`${i} `)
    }
}
fn(20)
spaceBetween()

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let fn2 = (a, b) => {
    if (b < a) {
        for (b; b <= a; b++) {
            document.write(`${b} `)

        }
    } else if (a < b) {
        for (b; b >= a; b--) {
            document.write(`${b} `)
        }
    } else {
        document.write('a = b')
    }
}
fn2(30, 40)
spaceBetween()

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let array = [1, 2, 3, 4, 5]
let fn3 = (arr, k) => {
    let buffer
    for (i = 0; i < arr.length; i++) {
        if (i === k) {
            buffer = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = buffer
        }
    }
    return arr
}
document.write(fn3(array, 1))
spaceBetween()

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
let nums = [1, 0, 3, 4, 5, 6, 0, 8, 2, 4, 0, 6, 1, 2, 0, 5, 2, 0, 0, 0, 5]
let sort = (arr) => {
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[j] === 0 && arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = 0
            }
        }
    }
    return arr
}
document.write(sort(nums))
