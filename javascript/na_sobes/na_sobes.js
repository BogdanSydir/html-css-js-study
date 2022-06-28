console.log('_________ТИПИ ДАНИХ_________')

console.log(typeof 'текст'); //string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof [1, 2, true, 'asda']); //object (масив це об'єкт)
console.log(typeof {status: 'lol'}); //object)
console.log(typeof NaN); // number)
// NaN - коли йде обчислення, але одне не є числом
// null - пуста заглушка

console.log(100 + '2') // string
console.log(+'15') // number
console.log(parseInt('22.98'));// number 15
console.log(parseFloat('22.98'));// number 15.98

console.log(!!0, !!'', !!NaN, !!null, !!undefined) // false, все решта тру



console.log('___________ВИДИ ПРИСВОЄННЯ І ПОРІВНЯННЯ__________')
{
    var var1 = 'var' // видимий за межами блоку ініціалізації
    let let1 = 'let' // видимий тільки в блоці ініціалізації, лет не дає створити змінну з таким самим ім'ям
    const const1 = 'const' // те саме що лет, але не можна змінити
    console.log(let1)
    console.log(const1)
}
console.log(var1)

let A1 = 0
let B1 = A1++ // спочатку B присвоює значення А, а потім А збільшується
console.log(A1, B1) // 1 0
let A2 = 0
let B2 = ++A2 // спочатку A збільшується, а потім B присвоює значення
console.log(A2, B2) // 1 1

let a = 5
a += 100 // a = a + 100
console.log(a)

console.log(5 == '5') //true, не перевіряє тип даних
console.log(5 === '5') //false
console.log(5 != '5') //false, не перевіряє тип даних
console.log(5 !== '5') //true
// > більше, < менше, = присвоєння, >= більше рівне, <= менше рівне


console.log('___________МЕТОДИ СТРІНГІВ_________')

let string = 'oh shit'
console.log(string.length) // виведе довжину стрічки
console.log(string.indexOf('s')) // виведе індекс символа
console.log(string[1]) // виведе 1 символ
console.log(string.charAt(3)) // виведе 3 символ
console.log(string.concat('!!!')) // конкатинація
console.log(string.toLowerCase()) //до нижнього регістру
console.log(string.toUpperCase()) // до верхнього регістру
console.log(string.includes('shit'))// true перевіряє стрінгу на наявність певного тексту
console.log(string.endsWith('shit')) // true перевіряє чи закінчується на заданий текст
console.log(string.startsWith('shit')) // false перевіряє чи починається на заданий текст
console.log(string.trim()) // видаляє пробіли по краях
let str1 = 'slava'
let str2 = 'ukraini'
console.log(str1 + ' ' + str2)
console.log(string.replace('o', 'lo')) //заміняє перший символ на lo
console.log(string.replaceAll('o', 'lo')) //заміняє всі символи на lo
console.log(string.slice(1, 3)) // залишає з певного по певний елемент
console.log(string.substr(1, 2)) // залишає з певного задану кількість
console.log(string.split(' ')) //розділяє на масив по певному елементу


console.log('___________МЕТОДИ МАСИВІВ__________')

let someArr = [1, 2, true, 'sad', [5, 7, 5], {age: 5}]
console.log(someArr);
console.log(Array.isArray(someArr)) // true перевіряє чи це масив
console.log(someArr.push('pushed')) // додає елемент в кінець і повертає нову довжину
console.log(someArr.unshift('pushed front')) // додає елемент в початок і повертає нову довжину
console.log(someArr.pop()) // видаляє останній, повертає видалений
console.log(someArr.shift()) // видаляє перший, повертає видалений
console.log(someArr.concat(['concat'])) // конкатинує два масиви, повертає новий
console.log(someArr.slice(1, 3)) // залишає з певного по певний елемент
console.log(someArr.splice(1, 3, 'new obj')) // вирізає з певного по певний елемент, на місце видалених можна закинути нові елементи
console.log(someArr.reverse()) // reverse
console.log(someArr.join(' / ')) // перетворює у стрінгу, за замовчуванням через кому, але можна визначити по чому
console.log(someArr.sort()) // сортує по алфавіту someArr.sort((a, b) => a - b) щоб посортувати числа
// всі вище змінюють поточний мосив
console.log(someArr.flat()) // виводить всі елементи на один рівень

let numbers = [1, 2, 3, 4, 5, 6, 7]
numbers.forEach((value) => console.log(value)) // виконує колбек для кожного елемента і змінює, нічого не повертає

console.log(numbers.filter((item, index) => item > 5)); // дозволяє відфільтрувати і повертає новий масив

let map = numbers.map(value => value * 2) // повертає новий масив не змінюючи поточний, виконує колбек для кожного
console.log(map);

let result = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) // бере поточне і робить щось опираючись на наступне
console.log(result, 'result')

//spread:
let nums = [1, 2, 3]
function sum(x, y, z){
    console.log(x+y+z)
}
sum(...nums) //підставляє значення в аргументи функції



console.log('___________МЕТОДИ ОБ*ЄКТІВ__________')

let user = {}
user.name = 'vasya' //додає поля
user['age'] = 31    //додає поля
delete user.age     //видаляє поля

const job = {position: 'cashier', isAvailable: true};
const sucks = {field: 'field1', fieldTwo: 'field2'}

const keys = Object.keys(job)
console.log(keys); // виводить ключі position, isAvailable

const values = Object.values(job)
console.log(values); // виводить значення cashier, true

const entries = Object.entries(job) // [position, cashier] [isAvailable, true]
console.log(entries);

const assign = Object.assign(job, sucks) //додає один об'єкт в інший
console.log(assign);

const spread = {...job, ...sucks} // об'єднує як вище
console.log(spread);



console.log('__________ПЕРЕВІРКА І ЦИКЛИ__________')

//if
let age = 20
let status = true
if (age > 5 && status) { // end
    //do if
} else if (age > 5 || status) { // or
    // do else
} else {
    // do else
}

//switch
let value = 'a'
switch (value) {
    case 'a':
        console.log('case 1')
        break; //припиняє перевірки, якщо не написати то виконає і наступний (гавнокод)
    case 'b':
        console.log('case 2')
        break;
    default: // якщо нічого не відпрацювало
        console.log('default value')
}

//for
for (let i = 1; i < 5; i++) {
    console.log(i)
}

//forof
let arr = [1, 2, true, 'kek']
for (let arrEl of arr) {
    console.log(arrEl)
}

//while
let i = 0
while (i < 5) {
    console.log(i)
    i++
}

//do while
let j = 0
do {
    console.log(j)
    j++
} while (j < 5)
{
    console.log(j)
    j++
}

//forin
let userIter = {name: 'vasya', age: 123}
for (let userKey in userIter) {
    console.log(userKey, userIter[userKey]); //name vasya; age 123
}

console.log('__________ДОМ СТРУКТУРА__________')

let text = 'text'
document.write(`<div>${text}</div>`) // інтерполяція

let div = document.createElement('div') // створює тег
document.body.append(div) // впроваджує елемент на сторінку
div.classList.add('div_one') // додає клас до вибраного блоку
div.classList.remove('div_one') // видаляє клас з вибраного блоку
div.classList.toggle('ooo') // додає якщо нема, видаляє якщо є
div.innerText = 'some text' // додає текст у блок
div.innerHTML = '<strong>some text</strong>' // додає текст і теги у блок

let byID = document.getElementById('') //шукає по ід
// byID.style.background = 'silver'
// byID.onclick(()=> console.log('do something')) // на кнопки

document.getElementsByClassName('className')[0] // шукає елемент по класу
document.querySelectorAll('div') // знаходить всі діви
//Browser Object Model -- це локалстореджі, куки і вся херня



console.log('__________ФУНКЦІЇ__________')

fn('function declaration')
function fn(value) {
    console.log(value)
}

let fn1 = function () {
    console.log(arguments[0]) //немає hoisting arguments - це псевдомасив який не можна сортувати, але можна взяти якийсь елемент чи проітерувати
}
fn1('function expression')

let arrowFn = (value) => { //не має arguments, не має hoisting, не має this
    console.log(value)
}
arrowFn('arrow fn')

let asd = {val: 0}
function inc(obj) {
    obj.val++
}
inc(asd)
console.log(asd); // виведе 1, бо об'єкт це ссилочний тип даних, якби там була змінна з числом (примітив) то вивело б 0 (створюється копія при виклику функії)

(function (msg) {
    console.log(msg)
}('self invoke fn'))

function calculator(action, a, b){
    return action(a, b)
}
console.log(calculator((a, b) => a + b,10,20)); //callback

//замикання:
function userCreator(name, age){
    let obj = {name: name, age: age}
    return{
        getName: ()=> obj.name,
        getAge: ()=> obj.age,
        setAge: (age)=> obj.age = age
    }
}
let manipulator = userCreator('kokos', 31)
console.log(manipulator.getName(), manipulator.getAge())
console.log(manipulator.setAge(20))

//call, apply, bind:
let user1 = {name: 'vasya', greeting: function (msg){console.log(`${msg}my name is ${this.name}`)}}
let user2 = {name: 'kokos'}

user1.greeting.call(user2,'msg ') // дозволяє викликати функцію з контекстом this від іншого юзера
let args = ['msg ']
user1.greeting.apply(user2, args) // те саме що колл, але аргументи як масив

let gritting = user1.greeting.bind(user1) // те саме що колл але робить копію функції, яку можна викликати, аргумент можна передавати при виклику
gritting('aloha ')

//function extends:
function User(name, surname){
    this.name = name; this.surname = surname}

function Customer(name, surname, password){
    User.apply(this, arguments); //Юзер створить 2 поля, аргумент пассворд втратиться
    this.password = password
}
let customer = new Customer('vasya', 'pupkin', 123)
console.log(customer)

//prototype
let numss = [1, 2, 3]
Array.prototype.printtt = function (){ // дозволяє розширити функціонал, (додати свої методи)
    for (let x of this) {
        console.log(x)
    }
}
numss.printtt()

//promise
function timeoutCounter(counter, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('async', counter)
            counter++
            resolve(counter)
        },delay)
    })
}
timeoutCounter(0, 1000)
    .then(counterValue => {return timeoutCounter(counterValue, 1000)})