import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    meals: [],
    loadingMeals: false
}

export const mealSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {
        fetchingMeals: state => {
            state.loadingMeals = true
        },
        fetchedMeals: (state, action) => {
            state.meals = action.payload,
            state.loadingMeals = false
        },
        fetchingErrorMeals: state => {
            state.loadingMeals = false
        }
    }
})

export const { fetchedMeals, fetchingMeals, fetchingErrorMeals} = mealSlice.actions

export default mealSlice.reducer