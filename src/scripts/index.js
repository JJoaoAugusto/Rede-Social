// CRIANDO PERfil
function sectionPerfil(){
    const image = document.querySelector(".perfil__image")
    const user = document.querySelector(".content__user")
    const stack = document.querySelector(".content__stack")

    for(let i = 0; i < users.length; i++){
        if(users[i].id == 1){
            image.src = users[i].img
            image.alt = "Foto de perfil"
            user.innerText = users[i].user
            stack.innerText = users[i].stack
        }
    }
}
sectionPerfil()

// CRIANDO LISTA DE SUGESTOES

function sectionUserSugestion(){
    const ul = document.querySelector(".sugestion__list")
    for(let i = 0; i < suggestUsers.length; i++){
        const li = document.createElement("li")
        li.classList.add("sugestion__card")
        li.id = `sugestion${suggestUsers[i].id}`

        const perfilContainer = document.createElement("div")
        perfilContainer.classList.add("card__perfil")

        const image = document.createElement("img")
        image.src = suggestUsers[i].img
        image.alt = "Foto de perfil"
        image.classList.add("card__image")
        perfilContainer.appendChild(image)

        const div = document.createElement("div")
        div.classList.add("perfil__content")

        const user = document.createElement("h3")
        user.innerText = suggestUsers[i].user
        user.classList.add("content__user")
        div.appendChild(user)

        const stack = document.createElement("p")
        stack.innerText = suggestUsers[i].stack
        stack.classList.add("content__stack")
        perfilContainer.appendChild(stack)
        div.appendChild(stack)

        perfilContainer.appendChild(div)
        li.appendChild(perfilContainer)

        const buttonFollow = document.createElement("button")
        buttonFollow.innerText = "Seguir"
        buttonFollow.classList.add("card__follow")
        buttonFollow.id = `follow${suggestUsers[i].id}`
        li.appendChild(buttonFollow)

        const buttonFollowing = document.createElement("button")
        buttonFollowing.classList.add("card__following")
        buttonFollowing.id = `following${suggestUsers[i].id}`
        buttonFollowing.innerText = "Seguindo"
        buttonFollowing.style.display = "none"
        li.appendChild(buttonFollowing)

        ul.appendChild(li)
    }
}
sectionUserSugestion()

// CRIANDO AÇÃO DE FOLLOW

function follow(){
    const ul = document.querySelector(".sugestion__list")
    ul.addEventListener("click", function(event){
        if(event.target.classList.contains("card__follow")){
            const follow = event.target
            const followId = event.target.id.substring(6)
            const following = document.getElementById(`following${followId}`)
            console.log(following)
            follow.style.display = "none"
            following.style.display = "block"
        }
        else if(event.target.classList.contains("card__following")){
            const following = event.target
            const followingId = event.target.id.substring(9)
            const follow = document.getElementById(`follow${followingId}`)
            following.style.display = "none"
            follow.style.
            display = "block"
        }
    })
}
follow()

// function following(){
//     const ul = document.querySelector(".sugestion__list")
//     ul.addEventListener("click", function(event){

//     })
// }

// CRIANDO LISTA DE POSTS

function sectionPosts(){

    const ul = document.querySelector(".posts__list")
    for(let i = 0; i < posts.length; i++){
        // Criando Li do post
        const li = document.createElement("li")
        li.classList.add("list__item")
        li.id = `item${posts[i].id}`
        
        // Criado header da li
        const postHeader = document.createElement("div")
        postHeader.classList.add("item__header")

        const image = document.createElement("img")
        image.src = posts[i].img
        image.alt = "Foto de perfil"
        image.classList.add("header__img")
        postHeader.appendChild(image)

        const headerPerfil = document.createElement("div")
        headerPerfil.classList.add("header__content")

        const user = document.createElement("h3")
        user.innerText = posts[i].user
        user.classList.add("content__user")
        headerPerfil.appendChild(user)

        const stack = document.createElement("p")
        stack.innerText = posts[i].stack
        stack.classList.add("content__stack")
        headerPerfil.appendChild(stack)

        postHeader.appendChild(headerPerfil)
        li.appendChild(postHeader)

        // Criando o conteúdo da li
        const title = document.createElement("h2")
        title.innerText = posts[i].title
        title.classList.add("title")
        li.appendChild(title)

        const content = document.createElement("p")
        content.innerText = posts[i].text
        if(content.innerText.length > 130){
            content.innerText = content.innerText.substring(0,130) + "..."
        }
        content.classList.add("item__content")
        li.appendChild(content)

        // Criando os botões da li
        const buttons = document.createElement("div")
        buttons.classList.add("list__button")

        const open = document.createElement("button")
        open.innerText = "Abrir Post"
        open.classList.add("button__open")
        open.id = `open${posts[i].id}`
        buttons.appendChild(open)

        const like = document.createElement("img")
        like.src = "./src/assets/img/like1.svg"
        like.classList.add("button__like")
        like.id = `like${posts[i].id}`
        buttons.appendChild(like)

        const dislike = document.createElement("img")
        dislike.src = "./src/assets/img/like2.svg"
        dislike.classList.add("button__dislike")
        dislike.id = `dislike${posts[i].id}`
        buttons.appendChild(dislike)

        const likeCount = document.createElement("span")
        likeCount.classList.add("button__count")
        likeCount.id = `count${posts[i].id}`
        let value = likeCount.value = posts[i].likes
        likeCount.innerText = value
        buttons.appendChild(likeCount)

        li.appendChild(buttons)

        ul.appendChild(li)
    }
}
sectionPosts()

// CRIANDO AÇÃO DE LIKE E DISLIKE

function sectionlike(){
    const ul = document.querySelector(".posts__list")
    ul.addEventListener("click", function(event){
        if(event.target.classList.contains("button__like")){
            const like = event.target
            const likeId = like.id.substring(4)
            const count = document.getElementById(`count${likeId}`)
            const dislike = document.getElementById(`dislike${likeId}`)
            
            let value = count.value + 1
            count.innerText = value

            like.style.display = "none"
            dislike.style.display = "flex"
        }
        else if(event.target.classList.contains("button__dislike")){
            const dislike = event.target
            const dislikeId = dislike.id.substring(7)
            const count = document.getElementById(`count${dislikeId}`)
            const like = document.getElementById(`like${dislikeId}`)
            
            let value = count.value
            count.innerText = value

            dislike.style.display = "none"
            like.style.display = "flex"
        }
    })
}
sectionlike()

// function sectionDislike(){
//     const ul = document.querySelector(".posts__list")
//     ul.addEventListener("click", function(event){

//     })
// }

// Criando Modal

function handleModal(){  
    const postsList = document.querySelector(".main__posts")
    postsList.addEventListener("click", function(event){
        if(event.target.classList.contains("button__open")){
            const postId = event.target.id.substring(4)
            for(let i = 0; i < posts.length; i++){
                if(postId == posts[i].id){

                    const dialog = document.createElement("dialog")
                    dialog.classList.add("dialog", "animation")
                    

                    const modal = document.createElement("div")
                    modal.classList.add("modal")

                    const modalHeader = document.createElement("div")
                    modalHeader.classList.add("modal__header")

                    const headerPerfil = document.createElement("div")
                    headerPerfil.classList.add("header__perfil")

                    const image = document.createElement("img")
                    image.src = posts[i].img
                    image.alt = "Foto de perfil"
                    image.classList.add("header__img")
                    headerPerfil.appendChild(image)

                    const perfilContent = document.createElement("div")
                    perfilContent.classList.add("perfil__content")
            
                    const user = document.createElement("h3")
                    user.innerText = posts[i].user
                    user.classList.add("content__user")
                    perfilContent.appendChild(user)
            
                    const stack = document.createElement("p")
                    stack.innerText = posts[i].stack
                    stack.classList.add("content__stack")
                    perfilContent.appendChild(stack)

                    headerPerfil.appendChild(perfilContent)
                    modalHeader.appendChild(headerPerfil)

                    const buttonClose = document.createElement("button")
                    buttonClose.innerText = "X"
                    buttonClose.classList.add("header__close")
                    modalHeader.appendChild(buttonClose)

                    modal.appendChild(modalHeader)

                    const title = document.createElement("h2")
                    title.innerText = posts[i].title
                    title.classList.add("item__title")
                    modal.appendChild(title)
            
                    const content = document.createElement("p")
                    content.innerText = posts[i].text
                    content.classList.add("item__content")
                    modal.appendChild(content)

                    dialog.appendChild(modal)
                    postsList.appendChild(dialog)

                    dialog.showModal()
                    closeModal()
                }
            }
        }
    })
}
handleModal()

function closeModal(){
    const close = document.querySelector(".header__close")
    const dialog = document.querySelector("dialog")
    const postsList = document.querySelector(".main__posts")
    close.addEventListener("click", function(){
        dialog.close()
        dialog.remove()
    })
}