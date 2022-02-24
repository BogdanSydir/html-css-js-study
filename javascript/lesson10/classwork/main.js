// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btn1 = document.getElementById('btn1')

let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')
btn1.onclick = function (e) {
    console.log(form1.button1.value)
    console.log(form1.button2.value)
    console.log(form2.button1.value)
    console.log(form2.button2.value)
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let btn2 = document.getElementById('btn2')
let tr = document.getElementById('tr')
let td = document.getElementById('td')
let content1 = document.getElementById('content')
let table = document.getElementsByClassName('table')[0]

btn2.addEventListener('click', (e) => {
    for (let i = 0; i < tr.value; i++) {
        let tr = document.createElement('tr')
        table.append(tr)
        for (let i = 0; i < td.value; i++) {
            let td = document.createElement('td')
            tr.append(td)
            td.append(content1.value)
        }
    }
})

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let mates = ['свиня', 'редиска', 'дурачок'];
let btn3 = document.getElementById('btn3')
btn3.addEventListener('click', function () {
let inputCursedWords = document.getElementById('cursedWords')

    for (const mate of mates) {
        if (inputCursedWords.value.includes(mate)) {
            alert('atata')
            inputCursedWords = ''
            return;

        }
    }
    if (inputCursedWords){
        alert('correct')
    }
})

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

//попереднє виконання підходить під це завдання О_о