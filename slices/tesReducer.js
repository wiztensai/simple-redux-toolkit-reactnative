import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const tesSlice = createSlice({
    name:"tes",
    initialState: {
        tes: "terserah"
    },
    reducers: {
        setTes: (state, action) => {
            state.value = action.payload            
        }
    }
})

export const {setTes} = tesSlice.actions
export default tesSlice.reducer