import {createSlice} from "@reduxjs/toolkit"

export const controlSlice=createSlice({
    name:"control",
    initialState:{
        power:true,
        instrument:true
    },
    reducers:{
        
        togglePower:state=>{
            state.power=!state.power;
        },
        toggleInstrument:(state)=>{
            state.instrument=!state.instrument;
        }
    }
});
export function getButtonText(state){
    return state.button;
}
export const {togglePower,toggleInstrument}=controlSlice.actions;
export default controlSlice.reducer;