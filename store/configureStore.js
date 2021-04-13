import {configureStore} from '@reduxjs/toolkit'
import tesReducer from '../slices/tesReducer'
import bottomNavSlice from '../slices/bottomNavSlice'

export const store = configureStore({
    reducer: {
        tes:tesReducer,
        bottomNavIndex:bottomNavSlice,
    }
})