// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        // console.log(posts)

        for (let post of posts) {
            let postDiv = document.createElement('div')
            let button = document.createElement('button')
            document.body.append(postDiv, button)
            postDiv.classList.add('post')
            button.innerText = 'get comments'

            postDiv.innerHTML = `<p>ID: ${post.id} </br>Title: ${post.title} </br>Body: ${post.body}</p>`
            button.onclick = (e) => {
                e.preventDefault()


                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        console.log(comments)
                        for (let comment of comments) {

                        let commentDiv = document.createElement('div')
                        commentDiv.classList.add('comment')
                        postDiv.appendChild(commentDiv)
                        commentDiv.innerHTML = `<p>Name: ${comment.name} </br>
                                                email: ${comment.email} </br>Body: ${comment.body}</p>`

                        }
                    })
                button.disabled = true
            }

        }
    })