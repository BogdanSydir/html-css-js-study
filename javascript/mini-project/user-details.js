// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
let url = new URL(location.href)
let user = JSON.parse(url.searchParams.get('data'))
let userDiv = document.getElementsByClassName('user')[0]
let btn = document.getElementsByClassName('btn')[0]

function scrapper(user) {
    for (const userItem in user) {

        if (typeof user[userItem] === 'object') {
            let text = document.createElement('div')
            text.innerHTML = `<h4>${userItem} : </br></h4>`
            userDiv.append(text)
            scrapper(user[userItem])
        } else {
            let text = document.createElement('div')
            text.innerHTML = `<i>${userItem} : ${user[userItem]}</br></i>`
            userDiv.append(text)
        }
    }
}

scrapper(user)

btn.onclick = function (e) {
    e.preventDefault()
    let postsDiv = document.createElement('div')
    postsDiv.classList.add('posts')
    document.body.appendChild(postsDiv)
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (let post of posts) {
                let postDiv = document.createElement('div')
                postsDiv.append(postDiv)
                postDiv.classList.add('post')
                postDiv.innerText = `${post.id} title: ${post.title}`

                let postDetails = document.createElement('a')
                postDetails.innerText = 'post details'
                postDetails.style.display = 'block'
                postDiv.appendChild(postDetails)
                postDetails.href = `post-details.html?data=${JSON.stringify(post)}`
            }

        })
    btn.disabled = true
}