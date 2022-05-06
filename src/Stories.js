
export default function Stories(){

    const stories = [
        {
            source: "assets/img/9gag.svg",
            user: '9gag'
        },
        {
            source: "assets/img/meowed.svg",
            user: 'meowed'
        },
        {
            source: "assets/img/barked.svg",
            user: 'barked'
        },
        {
            source: "assets/img/nathanwpylestrangeplanet.svg",
            user: 'nathanwpylestrangeplanet'
        },
        {
            source: "assets/img/wawawicomics.svg",
            user: 'wawawicomics'
        },
        {
            source: "assets/img/respondeai.svg",
            user: 'respondeai'
        },
        {
            source: "assets/img/filomoderna.svg",
            user: 'filomoderna'
        },
        {
            source: "assets/img/memeriagourmet.svg",
            user: 'memeriagourmet'
        }
    ]
 
    return(
        <div class="stories">
            {stories.map((arr) => {
                return(
                    <div class="story">
                        <div class="imagem"><img src= {arr.source} /></div>
                        <div class="usuario"> {arr.user}</div>
                    </div>
                )
            })};
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
      </div>
    )
}