import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loadingArea: false,
    area: []
}

export const areaSlice = createSlice({
    name: "area_filter",
    initialState,

    reducers: {
        fetchingArea: state => {
            state.loadingArea = true
        },
        fetchedArea: (state, action) => {
            state.area = action.payload,
            state.loadingArea = false
        },
        fetchingAreaError: state => {
            state.loadingArea = false
        }
    }
})

export const { fetchedArea, fetchingArea, fetchingAreaError } = areaSlice.actions
export default areaSlice.reducer