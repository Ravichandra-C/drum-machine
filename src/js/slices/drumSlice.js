import {createSlice} from "@reduxjs/toolkit"

export const drumSlice=createSlice({
    name:"drum",
    initialState:{
        button:""
    },
    reducers:{
        changeButtonText:(state,action)=>{
            state.button=action.payload
            return state;
        }
    }
})
export default drumSlice.reducer;
export const {changeButtonText}=drumSlice.actions;