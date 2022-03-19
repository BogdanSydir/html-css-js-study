// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

let usersDiv = document.getElementsByClassName('users')[0]

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            let userDiv = document.createElement('a')
            userDiv.classList.add('user')
            userDiv.innerText = `${user.id} - ${user.name}`
            userDiv.href = `user-details.html?data=${JSON.stringify(user)}`
            usersDiv.append(userDiv)
        }
    })
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
