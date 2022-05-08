import reactDom from "react-dom";
import Navbar from "./Navbar"
import Feed from "./Feed";
import BottomBar from "./BottomBar";

function App(){
    return(
        <div>
            <Navbar />
            <Feed />
            <BottomBar />
        </div>
    )
}


reactDom.render(<App />, document.querySelector(".root"))
