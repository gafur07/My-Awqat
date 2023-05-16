import { configureStore } from "@reduxjs/toolkit";
import areaReducer from "./reducers/areaSlice";
import cartReducer from "./reducers/cartSlice";
import categoryReducer from "./reducers/categorySlice";
import mealDetailsReducer from "./reducers/MealDetails";
import mealReducer from "./reducers/mealSlice";
import searchReducer from "./reducers/searchSlice";

export const store = configureStore({
    reducer: {
       category: categoryReducer,
       meals: mealReducer,
       area: areaReducer,
       details: mealDetailsReducer,
       cart: cartReducer,
       search: searchReducer
    }
})