
function Logo(){
    return(
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    )
}



export default function Navbar() {
    const icons = ["paper-plane-outline","compass-outline","heart-outline","person-outline"];

    return (
        <div class="container">
          <Logo />

          <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {
                icons.map((arr) => <ion-icon name={arr}></ion-icon>)
            }
            
          </div>

          <div class="icones-mobile">
            <ion-icon name={icons[1]}></ion-icon>
          </div>
        </div>
    )
}