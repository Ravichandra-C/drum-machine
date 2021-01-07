const React = require('react');
import { obj } from "../drumkeys"
import DrumButton from "../components/DrumButton"
import {connect} from "react-redux"
import {changeButtonText} from "../slices/drumSlice"
function mapStateToProps(state){
    return{
        buttonText:state
    }
}


class Drum extends React.Component {

    constructor() {
        super();
        
        this.keys = obj.keys;

    }
    playButton(event){
        console.log("Inside the keypress event");
        console.log(event);
        if(document.getElementById(event.key.toUpperCase())){
            document.getElementById(event.key.toUpperCase()).click();
        }
    }    
    componentDidMount() {
        document.addEventListener("keydown", this.playButton, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.playButton, false);
    }
    render() {
        let keyButtons = this.keys.map((item) => {
            item.changeButtonText=this.props.changeButtonText;
            return <DrumButton props={item} key={item.text}/>
        })
        return (
            <div id="drum">
             {keyButtons} 
            </div>
        );

    }

}

export default connect(null,{changeButtonText})(Drum)