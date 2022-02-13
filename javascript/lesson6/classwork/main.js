// - Дано список імен.
let n1 = 'Harry.......Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let name = (str, symbol) => {
    let newArr = []
    if(str.includes(symbol)) {
        let arrName = str.split(symbol)
       console.log(arrName)
        arrName.forEach((item)  =>{
        if (item) {
            newArr.push(item)
        }
        })
        console.log(newArr.join(' '))
    }
}
name (n1, '.')

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let fn = (lenght) => {
let randomNums = []
    for (i = 0; i < lenght; i++){
        randomNums.push(Math.round(Math.random()*100))
    }
    return randomNums;
}
let nums = fn(10);
console.log(nums);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(nums.sort((curr, next) => curr - next));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let evenNums = nums.filter(number => number%2===0)
console.log(evenNums)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let string = nums.map(number => number.toString())
console.log(string)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let fn2 = (arr, directrion) => {
        if (directrion === 'ascending'){
            return arr.sort((curr, next) => curr - next)
        } else if (directrion === 'descending'){
            return arr.sort((curr, next) => next - curr)
        }
}
console.log(fn2(nums, 'descending'))

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((curr, next) => next.monthDuration - curr.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(duration => duration.monthDuration > 5));