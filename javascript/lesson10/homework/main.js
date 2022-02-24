// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let text = document.getElementById('text')
let btn1 = document.getElementById('btn1')

btn1.onclick = function (){
text.remove()
};

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.getElementById('btn2')
btn2.onclick = function (){
    btn2.hidden = true
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let form = document.forms[0]
form.onsubmit = function (e){
    e.preventDefault();
    if (e.target.age.value < 18){
        alert('age is less than 18')
    } else alert(`your age is ${e.target.age.value}`)

    console.log(e.target.age.value)
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let btn3 = document.getElementById('btn3')
let menu = document.getElementsByClassName('menu')[0]

menu.style.background = 'green'
menu.style.height = '200px'
menu.style.width = '200px'



btn3.onclick = function () {
    menu.classList.toggle('hidden')
}

// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
for (let comment of comments) {
    console.log(comment)
    let divCreator = document.createElement('div')
    document.body.append(divCreator)
    divCreator.append(`${comment.name}, ${comment.body}`)

    let button = document.createElement('button')
    document.body.append(button)
    button.innerText = 'close it'
    button.onclick = function (){
        divCreator.classList.toggle('hidden')
    }
}

