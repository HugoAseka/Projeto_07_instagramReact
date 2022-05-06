function User(props){
    return(
        <div class="usuario">
            <img src={props.userImg} />
            <div class="texto">
              <strong>{props.userProfile}</strong>
              {props.userName}
            </div>
          </div>
    )
}


export default function Sidebar(){
    const userSuggestions = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
        },
        {
            image: "assets/img/chibirdart.svg",
            name: "chibirdart",
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
        },
        {
            image: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
        },
        {
            image: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
        }
    ]

    return(
        <div class="sidebar">
          <User userImg = "assets/img/catanacomics.svg" userProfile = "catanacomics" userName = "Catana" />

          <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {userSuggestions.map((arr) => {
                    return(
                        <div class="sugestao">
                            <div class="usuario">
                                <img src={arr.image} />
                                <div class="texto">
                                <div class="nome">{arr.name}</div>
                                <div class="razao">Segue você</div>
                                </div>
                            </div>

                           <div class="seguir">Seguir</div>
                         </div>
                    )
                })}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}