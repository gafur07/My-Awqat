import { createSlice } from "@reduxjs/toolkit"
import Swal from "sweetalert2"

const initialState = {
    search: [],
    loadingSearch: false
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        fetchingSearch: state => {
            state.loadingSearch = true
        },
        fetchedSearch: (state, action) => {
            state.search = action.payload,
            state.loadingSearch = false
        },
        fetchingErrorSearch: state => {
            state.loadingSearch = false
            Swal.fire({
                icon: "error",
                title: "Not found",
                text: "Meal Is Not Found"
            })
        }
    }
})

export const { fetchedSearch, fetchingSearch, fetchingErrorSearch} = searchSlice.actions

export default searchSlice.reducer