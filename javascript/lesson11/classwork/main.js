// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку
// об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
for (let user of users) {
    let div = document.createElement('div')
    let button = document.createElement('button')
    button.innerText = 'add to favorite'
    document.body.append(div)
    div.classList.add('div')
    div.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status} `
    div.appendChild(button)

    button.onclick = function (e) {
        e.preventDefault()

        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        console.log(favorites)
        favorites.push(user)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
}
// Створити сторніку favorites.html при переході на яку потрібно вивест
// в документ всіх обраних на попередньому етапі.