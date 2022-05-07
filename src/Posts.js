import React from "react"
export default function Posts(){
   
    const [heart, setHeart] = React.useState("heart-outline")
    const [heart1, setHeart1] = React.useState("heart-outline")
    const [color, setColor] = React.useState()
    const [color1, setColor1] = React.useState()
    const [totalLikes, setTotalLikes] = React.useState(101.523)
    const [totalLikes1, setTotalLikes1] = React.useState(99.159)
   function like(){
    if( color !== 'danger'){
        setHeart('heart');
        setColor('danger');
        setTotalLikes(totalLikes + 0.001);
    }
    else{
        setHeart('heart-outline');
        setColor('');
        setTotalLikes(totalLikes - 0.001);
    }


   }
   function like1(){    
        if( color1 !== 'danger'){
            setHeart1('heart');
            setColor1('danger');
            setTotalLikes1(totalLikes1 + 0.001);
        }else {
            setHeart1('heart-outline');
            setColor1('');
            setTotalLikes1(totalLikes1 - 0.001);
        }

    }   
    const allPosts = [
        {
            user: 'meowed',
            userImage:  "assets/img/meowed.svg",
            postImage: 'assets/img/gato-telefone.svg',
            likedImage: 'assets/img/respondeai.svg',
            liked: 'respondeai',
            likedNum: totalLikes,
            heartFunction: like,
            heartArr: heart,
            heartColor:color
        },
        {
            user: 'barked',
            userImage: "assets/img/barked.svg",
            postImage: 'assets/img/dog.svg',
            likedImage: 'assets/img/adorable_animals.svg',
            liked: 'adorable_animals',
            likedNum: totalLikes1.toFixed(3),
            heartFunction: like1,
            heartArr: heart1,
            heartColor: color1
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

                    <div onClick = {arr.heartFunction} class="conteudo">
                        <img src={arr.postImage} />
                    </div>
                  
                    <div class="fundo">
                        <div class="acoes">
                        <div>
                            <ion-icon color = {arr.heartColor} onClick = {arr.heartFunction} name={arr.heartArr}></ion-icon>
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