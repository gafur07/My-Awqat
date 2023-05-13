import { configureStore } from "@reduxjs/toolkit";
import areaReducer from "./reducers/areaSlice";
import categoryReducer from "./reducers/categorySlice";
import mealDetailsReducer from "./reducers/MealDetails";
import mealReducer from "./reducers/mealSlice";

export const store = configureStore({
    reducer: {
       category: categoryReducer,
       meals: mealReducer,
       area: areaReducer,
       details: mealDetailsReducer
    }
})