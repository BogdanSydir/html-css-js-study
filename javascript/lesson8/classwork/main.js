// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('nameOfGroup');

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
console.log(ul)
ul[0].style.width = '400px';
ul[0].style.border = '2px solid black';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (let linkListElement of linkList) {
    linkListElement.style.width = '50%'
    linkListElement.style.border = '3px solid green'
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2')
console.log(listElement2[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.getElementsByTagName('li')
for (let allLiElement of allLi) {
    allLiElement.style.background = 'silver'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let allElementsA = document.getElementsByTagName('a')
for (let allElementsAElement of allElementsA) {
    allElementsAElement.classList.add('anchor')
    console.log(allElementsAElement)
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let allElements of allElementsA) {
    if (allElements.innerText === 'link3') {
        allElements.style.fontSize = '40px'
    }
    console.log(allElements)
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let allElementsAElement of allElementsA) {
    allElementsAElement.classList.add(`element_${allElementsAElement.innerText}`)
    console.log(allElementsAElement)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
let newBackgroundColor = prompt('set new background color');
for (let subHeaderElement of subHeader) {
    subHeaderElement.style.background = `${newBackgroundColor}`
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let newTextColor = prompt('set new text color');
for (let subHeaderElement of subHeader) {
    if (subHeaderElement.innerText === 'content 2 segment') {
     subHeaderElement.style.color = `${newTextColor}`
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
let newText = prompt('enter new text')
content1[0].children[0].innerText = `${newText}`;

// l) отримати елементи p та змінити їм padding на 20px
let elementsP = document.getElementsByTagName('p')
for (let elementsPElement of elementsP) {
elementsPElement.style.padding = '20px'
elementsPElement.style.border = '2px solid black'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2')
text2[0].innerText = 'dec-2021'