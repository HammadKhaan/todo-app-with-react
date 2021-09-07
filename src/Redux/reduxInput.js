import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        todos: [],
    },

    reducers: {

        add: (state, action) => {
            console.log(`action`, action)
            console.log(`state`, state)
            const { type, payload } = action
            state.todos = [...state.todos, payload]
        },
        del: (state, {payload}) => {
            //console.log(state)
            const { id} = payload
            
          state.todos=state.todos.filter((todo,i)=>i!==id)

        }

    },
})

// Action creators are generated for each case reducer function
export const { add, del } = inputSlice.actions

export default inputSlice