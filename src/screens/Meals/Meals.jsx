import { Spin } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { addToCart } from "../../store/reducers/cartSlice";
import {
  fetchedMeals,
  fetchingErrorMeals,
  fetchingMeals,
} from "../../store/reducers/mealSlice";



const Meals = () => {
  const params = useParams();
  const { meals, loadingMeals } = useSelector((store) => store.meals);
  const { basket } = useSelector(store => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingMeals());
    axios
      .get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
      )
      .then((res) => {
        dispatch(fetchedMeals(res.data.meals));
      })
      .catch((err) => {
        dispatch(fetchingErrorMeals(err));
      });
  }, [params]);

  function addCart(meal) {
    dispatch(addToCart(meal))
  }
  console.log(basket);

  return (
    <>
      <Heading>
        <h1>
          <span className="span">{params.categoryName}</span> Category Meals
        </h1>
      </Heading>
      <Spin spinning={loadingMeals}>
        <div className="row py-12">
          {meals?.map((item) => (
            <div
                className="item cursor-pointer transition duration-300"
                key={item.idMeal}
              >
              <Link to={`/meal/${item.idMeal}`} key={item.idMeal}>
                <img src={item.strMealThumb} />
              </Link>
              <div className="item__body">
                <h2 className="w-full">{item.strMeal}</h2>
                <button onClick={() => addCart(item)}>Favourite</button>
              </div>
              </div>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default Meals;
