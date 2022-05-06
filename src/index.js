import reactDom from "react-dom";
import Navbar from "./Navbar"
import Feed from "./Feed";
import BottomBar from "./BottomBar";




reactDom.render(<Navbar />, document.querySelector(".navbar"))
reactDom.render(<Feed />, document.querySelector(".feed"))
reactDom.render(<BottomBar />, document.querySelector(".bottomBar"))