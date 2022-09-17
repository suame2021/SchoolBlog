import { configureStore, createSlice } from '@reduxjs/toolkit'
import { StaticRouter } from 'react-router-dom'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 , age: 10},
    reducers: {
        increment(state, action) {
            state.counter +=20
        },
        decrement(state, action) {
            state.counter -=20
        },
        addBy(state, action) {
            state.counter += action.payload
        }

    }
})

export const actions = counterSlice.actions
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store;