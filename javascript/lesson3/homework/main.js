// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array1 = [1, 2, 3, 4, 5];
let array2 = ['one', 'two', 'three', 'four', 'five']
let array3 = [1, 2, 'three', true, false]
console.log(array1)
console.log(array2)
console.log(array3)


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrayEmpty = []
arrayEmpty[0] = 'one'
arrayEmpty[1] = 2
arrayEmpty[3] = true
console.log(arrayEmpty)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


for (let i = 0; i < 10; i++) {
    document.write(`<div>text</div>`)
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>text, index - ${i}</div>`)
}

let j = 0;
while (j < 20){
    document.write(`<h1>teeeeeeeeeeeext</h1>`)
    j++;
}

let k = 0;
while (k < 20){
    document.write(`<h1>index -</h1>${k}`)
    k++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array4 = [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
for (let i = 0; i < array4.length; i++){
console.log(array4[i])
}

let array5 = ['one', 'one', 'two', 'three', 'five', 'eight', 'thirteen', 'twenty one', 'thirty four', 'forty five']
for (let i = 0; i < array5.length; i++){
    console.log(array5[i])
}

let array6 = ['one', 2, true, 'three', 5, false, 'thirteen', 21, true, 'forty five']
for (let i = 0; i < array6.length; i++){
    console.log(array6[i])
}

let array7 = ['one', 2, true, 'three', 5, false, 'thirteen', 21, true, 'forty five']
for (let i = 0; i < array7.length; i++){
    if (typeof array7[i] === "boolean") {
        console.log(array7[i])
    }
}

let array8 = ['one', 2, true, 'three', 5, false, 'thirteen', 21, true, 'forty five']
for (let i = 0; i < array8.length; i++){
    if (typeof array8[i] === "number") {
        console.log(array8[i])
    }
}

let array9 = ['one', 2, true, 'three', 5, false, 'thirteen', 21, true, 'forty five']
for (let i = 0; i < array9.length; i++){
    if (typeof array9[i] === "string") {
        console.log(array9[i])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let array10 = []
array10[0] = 1;
array10[1] = 'two';
array10[2] = true;
array10[3] = 3;
array10[4] = 'four';
array10[5] = false;
array10[6] = 5;
array10[7] = 'six';
array10[8] = true;
array10[9] = 7;

for (j = 0; j < array10.length; j++){
    console.log(array10[j])
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


for (j = 0; j < 10; j++){
    console.log(j+1)
    document.write(`</br>`, j+1)
}

for (j = 0; j < 100; j++){
    console.log(j+1)
    document.write(`</br>`, j+1)
}

for (j = 0; j < 100; j = j+2){
    console.log(j+1)
    document.write(`</br>`, j+1)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (j = 0; j < 100; j++){
    if (j % 2 === 1){
        console.log(j+1)
        document.write(`</br>`, j+1)
    }
}

for (j = 0; j < 100; j++){
    if (j % 2 === 0){
        console.log(j+1)
        document.write(`</br>`, j+1)
    }
}