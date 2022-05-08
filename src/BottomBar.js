export default function BottomBar(){
    const icons = ['home','search-outline', 'add-circle-outline', 'heart-outline', 'person-outline']
    return(
        <div class="bottomBar">
            <div class="fundo-mobile">
                {
                icons.map((arr) =>  <ion-icon name={arr}></ion-icon>)  
                }
            </div>
        </div>
    )
}