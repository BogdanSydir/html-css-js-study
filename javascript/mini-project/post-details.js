// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(location.href)
let post = JSON.parse(url.searchParams.get('data'))
let postDiv = document.getElementsByClassName('post')[0]
let commentsDiv = document.getElementsByClassName('comments')[0]

postDiv.innerHTML = `userId: ${post.userId} </br> id:${post.id} </br> title: ${post.title} </br>
                     body: ${post.body} </br>`

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (let comment of comments) {
            console.log(comment);
            let commentDiv = document.createElement('div')
            commentDiv.classList.add('comment')
            commentsDiv.append(commentDiv)

            commentDiv.innerHTML = `"postId": ${comment.postId} </br> "id": ${comment.id} </br> "name": ${comment.name}
                                    "email":${comment.email} </br> "body": ${comment.body} </br> `
        }
    })
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать,
// так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)