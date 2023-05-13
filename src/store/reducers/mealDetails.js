import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mealDetails: [],
    loading: false
}

export const mealDetailsSlice = createSlice({
    name: "meal-details",
    initialState,
    
    reducers: {
        fetchingDetails: state => {
            state.loading = true
        },
        fetchedDetails: (state, actions) => {
            state.mealDetails = actions.payload,
            state.loading = false
        },
        fetchingDetailsError: state => {
            state.loading = false
        }
    }
})


export const { fetchingDetails, fetchedDetails, fetchingDetailsError } = mealDetailsSlice.actions
export default mealDetailsSlice.reducer