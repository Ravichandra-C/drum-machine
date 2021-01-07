import {configureStore} from "@reduxjs/toolkit"
import controlSlice from "./slices/controlSlice"
import drumSlice from "./slices/drumSlice"

let store=configureStore({

    reducer:
        {
            control:controlSlice,
            drum:drumSlice
        }
    
});


export default store;