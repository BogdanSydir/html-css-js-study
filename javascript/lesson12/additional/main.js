// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі
//     пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі
//     коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users)

        for (let user of users) {
            let userDiv = document.createElement('div')
            userDiv.classList.add('users')
            let userButton = document.createElement('button')
            userButton.innerText = 'get posts'
            document.body.append(userDiv)

            function scrapper(object) {
                for (const argumentsKey in object) {

                    if (typeof object[argumentsKey] === 'object') {
                        let text = document.createElement('div')
                        text.innerHTML = `<h4>${argumentsKey} : </br></h4>`
                        userDiv.append(text)
                        scrapper(object[argumentsKey])
                    } else {
                        let text = document.createElement('div')
                        text.innerHTML = `<i>${argumentsKey} : ${object[argumentsKey]}</br></i>`
                        userDiv.append(text)
                    }
                }
            }

            scrapper(user)

            userDiv.appendChild(userButton)
            userButton.onclick = (e) => {
                e.preventDefault()

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        let postsDiv = document.createElement('div')
                        postsDiv.classList.add('post')
                        userDiv.append(postsDiv)
                        for (const post of posts) {
                            let postDiv = document.createElement('div')
                            let postButton = document.createElement('button')
                            let commentsDiv = document.createElement('div')
                            postButton.innerText = 'get comments'
                            postsDiv.append(postDiv, postButton, commentsDiv)
                            postDiv.innerHTML = `<h4>Post ID:</h4> ${post.id} </br> <h4>Title:</h4> 
                                                 ${post.title} </br> <h4>Body:</h4> ${post.body}`

                            postButton.onclick = (e) => {
                                e.preventDefault()

                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        for (let comment of comments) {

                                            let commentDiv = document.createElement('div')
                                            commentsDiv.classList.add('comment')

                                            commentsDiv.append(commentDiv)
                                            commentDiv.innerHTML = `<h4>Name:</h4> ${comment.name} </br>
                                                <h4>email:</h4> ${comment.email} </br> <h4>Body:</h4> ${comment.body}`

                                        }
                                    })
                                postButton.disabled = true
                            }
                        }
                    })
                userButton.disabled = true
            }
        }
    })
