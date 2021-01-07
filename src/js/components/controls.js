import React from "react";
// import {store} from "../mainstore"
import {connect} from"react-redux"
import {togglePower,toggleInstrument} from "../slices/controlSlice"

function mapStateToProps(state){
    return{
        buttonText:state.drum.button
    }
}



class Controls extends React.Component{
    constructor(){
        super(); 
        this.updatePower=this.updatePower.bind(this);  
        this.changeInstrument=this.changeInstrument.bind(this)    
    }

    updatePower(){
        this.props.togglePower();
    }
    changeInstrument(){
        this.props.toggleInstrument();
    }
    render(){
        return (
            <div className="controls">
                <div className ='control'>
                    <span className='label'>Power</span> 
                    <label className="switch">
                        <input id='power' onChange={this.updatePower} type="checkbox" defaultChecked={true}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div id='display' className='control'>
                    <p className='showbutton'>{this.props.buttonText}</p>
                </div>
                <div className="control">
                    <span className='label'>
                        Bass
                        </span>
                    <label className="switch" onChange={this.changeInstrument}>
                        <input id='instrument' type="checkbox" defaultChecked={true}/>
                        <span className="slider round"></span>
                    </label>
                    <span className="label">Drum</span>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,{togglePower,toggleInstrument})(Controls)