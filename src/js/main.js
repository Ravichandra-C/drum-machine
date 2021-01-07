const ReactDOM= require("react-dom");
const React=require("react")
import "../scss/main.scss"
import {Heading} from "../js/components/heading"
import Drum from "./components/Drum"
import store from "./mainstore"
import Controls from "./components/controls"
import {Provider} from "react-redux"
ReactDOM.render(<Provider store={store}><div id='drum-machine'><Drum/><Controls/></div></Provider>,document.getElementById("outer"));