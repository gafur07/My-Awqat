import { createSlice } from "@reduxjs/toolkit"
import Swal from "sweetalert2"

const initialState = {
    basket: []
}

export const cartSlice = createSlice({
    name: "basket",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            if(state.basket.findIndex(item => item.idMeal === action.payload.idMeal) === -1) {
                state.basket = [action.payload, ...state.basket]
                Swal.fire({
                      icon: "success",
                      title: "Succec",
                      text: "Meal Added To Favourites",
                      timer: 5000
                    })
            }
        },
        removeToCart: (state, action) => {
            state.basket = state.basket.filter(item => item.idMeal !== action.payload)
        }
    }
})

export const { addToCart, removeToCart } = cartSlice.actions
export default cartSlice.reducer