import { createSlice } from '@reduxjs/toolkit'
export const incriDicri = createSlice({

    name: "counter",
    initialState: {
        value: 0,
        cartValue:0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },


        decrement: (state) => {
            if (state.value === 0) {
                console.log("<>>>>>>state");
            } else {
                state.value -= 1
            }
        },

        addCart:(state)=>{
            state.cartValue = state.value;
            state.value= 0 
        },
        deletCart:(state)=>{
            state.cartValue=0
        }
    },
})

export const { increment, decrement,addCart,deletCart } = incriDicri.actions

export default incriDicri.reducer