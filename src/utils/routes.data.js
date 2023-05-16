import Area from "../screens/Area-filter/Area";
import Favouriste from "../screens/Favourites/Favouriste";
import Home from "../screens/Home/Home";
import MealDetails from "../screens/Meal-details/MealDetails";
import Meals from "../screens/Meals/Meals";
import Notfound from "../screens/Notfound/Notfound";
import Search from "../screens/Search/Search";

export const RoutesData = [
    {path: "/", element: Home},
    {path: "/category/:categoryName", element: Meals},
    {path: "/filterArea/:area", element: Area},
    {path: "/meal/:idMeal", element: MealDetails},
    {path: "/favourites", element: Favouriste},
    {path: "/search", element: Search},
    {path: "*", element: Notfound,}
]