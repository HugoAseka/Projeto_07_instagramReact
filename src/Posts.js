
export default function Posts(){
    const allPosts = [
        {
            user: 'meowed',
            userImage:  "assets/img/meowed.svg",
            postImage: 'assets/img/gato-telefone.svg',
            likedImage: 'assets/img/respondeai.svg',
            liked: 'respondeai',
            likedNum: '101.523'
        },
        {
            user: 'barked',
            userImage: "assets/img/barked.svg",
            postImage: 'assets/img/dog.svg',
            likedImage: 'assets/img/adorable_animals.svg',
            liked: 'adorable_animals',
            likedNum: '99.159'
        }
    ]

    return(
        <div class="posts">
            {allPosts.map((arr) => {
                return(
                    <div class="post">
                    <div class="topo">
                        <div class="usuario">
                        <img src={arr.userImage} />
                        {arr.user}
                        </div>
                        <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={arr.postImage} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                        </div>

                        <div class="curtidas">
                        <img src={arr.likedImage} />
                        <div class="texto">
                            Curtido por <strong>{arr.liked}</strong> e <strong>outras {arr.likedNum} pessoas</strong>
                        </div>
                        </div>
                    </div>
                    </div>
                )
              })}
          </div>
    )
}