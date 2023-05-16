import { Spin } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchedDetails,
  fetchingDetails,
  fetchingDetailsError,
} from "../../store/reducers/MealDetails";

const MealDetails = () => {
  const { mealDetails, loading } = useSelector((store) => store.details);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchingDetails());

    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
      )
      .then((res) => {
        console.log(res.data.meals);
        dispatch(fetchedDetails(res.data.meals[0]));
      })
      .catch((err) => {
        dispatch(fetchingDetailsError());
      });
  }, [params]);

  const {
    strMeal,
    strCategory,
    strArea,
    strTags,
    strYoutube,
    strMealThumb,
    strInstructions,
  } = mealDetails;

  return (
    <>
      <div className="w-[80%] mx-auto meal_yt">
        <Spin spinning={loading}>
          <div className="flex justify-between items-center  gap-4 p-[1rem] my-[2rem] mx-0 border-2 border-[rgba(0,0,0,.1)] rounded-md shadow-md flex-wrap">
            <h1 className="text-xl font-semibold">{strMeal}</h1>
            <div className="meal-details">
              <Link to={`/category/${strCategory}`} className="details-link">
                {strCategory}
              </Link>
              <Link to={`/filterArea/${strArea}`} className="details-link">
                {strArea}
              </Link>
              {strTags && <b className="details-link">{strTags}</b>}
              <b className="details-link" onClick={() => navigate(-1)}>
                Back
              </b>
            </div>
          </div>
          <div className="youtube p-[1rem] border-2 border-[rgba(0,0,0,.1)] shadow-md w-full rounded-md">
            <iframe
              className="w-full"
              width="900"
              height="506"
              src={`https://www.youtube.com/embed/${
                strYoutube && strYoutube.slice(-11)
              }`}
              title="YouTube video  player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="description flex items-start gap-6 w-full text-gray-600 p-[1rem] my-[2rem] mx-0 border-2 border-[rgba(0,0,0,.1)] rounded-md shadow-md">
            <img
              className="w-[20rem] rounded-md"
              src={strMealThumb}
              alt={strMeal}
            />
            <p>{strInstructions}</p>
          </div>
        </Spin>
      </div>
    </>
  );
};

export default MealDetails;
