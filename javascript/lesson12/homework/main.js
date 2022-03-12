// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let page = document.getElementsByClassName('page')[0]

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let postDiv = document.createElement('div')
            postDiv.classList.add('post')

            let idDiv = document.createElement('div')
            idDiv.innerHTML = `<h3>ID: ${post.id}</h3>`
            let titleDiv = document.createElement('div')
            titleDiv.innerHTML = `<h4>Title: ${post.title}</h4>`
            let bodyDiv = document.createElement('div')
            bodyDiv.innerHTML = `<h5>Body: ${post.body}</h5>`

            postDiv.append(idDiv, titleDiv, bodyDiv)
            page.appendChild(postDiv)
        }
    })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(comments =>{
    for (let comment of comments) {
        let commentDiv = document.createElement('div')
        commentDiv.classList.add('comment')

        let idDiv = document.createElement('div')
        idDiv.innerHTML = `<h3>ID: ${comment.id}</h3>`
        let nameDiv = document.createElement('div')
        nameDiv.innerHTML = `<h4>Name: ${comment.name}</h4>`
        let emailDiv = document.createElement('div')
        emailDiv.innerHTML = `<h5>email: ${comment.email}</h5>`
        let bodyDiv = document.createElement('div')
        bodyDiv.innerHTML = `<h6>Body: ${comment.body}</h6>`

        commentDiv.append(idDiv, nameDiv, emailDiv,bodyDiv)
        document.body.appendChild(commentDiv)
        console.log(comment)
    }
})