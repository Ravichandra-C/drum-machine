import { connect } from "react-redux";
import { drumSlice } from "../slices/drumSlice";

const React =require("react"); 


function mapStateToProps(state){
       return ({     
            power:state.control.power,
            instrument:state.control.instrument
       });
}

class DrumButton extends React.Component{

    constructor(props){
        super(props);
        this.audioPlay=this.audioPlay.bind(this);
        this.audioref=React.createRef();
    }
   
    render(){
        return (
            <div className='drum-pad' id={this.props.props.text} onClick={this.audioPlay} onKeyPress={this.audioPlay}>
                <button className="btn btn-primary" data-button={this.props.props.text}> {this.props.props.text}</button>
                <audio className='clip' id={this.props.props.text} ref={this.audioref} src={this.props.instrument?this.props.props.url_d:this.props.props.url_b}></audio>
            </div>
        )
    }
    audioPlay(event){
        if(event.type=='keypress'){
            console.log(event)
            console.log('Key' + event.target.dataset.button)
            if (event.code == 'Key' + event.target.dataset.button) {
            event.preventDefault();
            return false;
            }
        }
        console.log(this.props)
        if(!this.props.power){

            event.preventDefault();
            return false;
        }
        this.audioref.current.play();
        this.props.props.changeButtonText(this.props.instrument?this.props.props.keyName_d:this.props.props.keyName_b);
        event.preventDefault()
    }

}

export default connect(mapStateToProps)(DrumButton);