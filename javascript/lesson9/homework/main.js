// Все робити за допомоги js.
// - створити блок,
let wrap = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
wrap.classList.add('wrap')
wrap.classList.add('collapse')
wrap.classList.add('alpha')
wrap.classList.add('beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
wrap.style.background = 'green'
wrap.style.height = '200px'
wrap.style.fontSize = '40px'

// - додати цей блок в body.
document.body.append(wrap)

// - клонувати його повністю, та додати клон в body.
let cloneWrap = wrap.cloneNode()
document.body.append(cloneWrap)

// - Є масив:
let arr = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
for (let element of arr) {
    let li = document.createElement('li');
    let ul = document.getElementsByTagName('ul')[0]
    ul.appendChild(li)
    li.append(element)
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let coursesElement of coursesAndDurationArray) {
    let coursesDiv = document.createElement('div');
    coursesDiv.innerText = `${coursesElement.title} ${coursesElement.monthDuration}`
    document.body.append(coursesDiv)
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.
for (let coursesElement of coursesAndDurationArray) {
    let coursesDiv = document.createElement('div')
    coursesDiv.classList.add('item')
    document.body.append(coursesDiv)

    let h2 = document.createElement('h2')
    h2.classList.add('heading')
    coursesDiv.append(h2)
    h2.innerText = coursesElement.title

    let p = document.createElement('p')
    p.classList.add('description')
    h2.append(p)
    p.innerText = `${coursesElement.monthDuration}`
}