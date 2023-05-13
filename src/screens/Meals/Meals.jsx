import { Spin } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import {
  fetchedMeals,
  fetchingErrorMeals,
  fetchingMeals,
} from "../../store/reducers/mealSlice";

const Meals = () => {
  const params = useParams();
  const { meals, loadingMeals } = useSelector((store) => store.meals);
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
            <Link to={`/meal/${item.idMeal}`} key={item.idMeal}>
              <div
                className="item cursor-pointer transition duration-300 hover:border-slate-600 border-2"
                key={item.idMeal}
              >
                <img src={item.strMealThumb} />
                <h1 className="w-full truncate">{item.strMeal}</h1>
              </div>
            </Link>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default Meals;
