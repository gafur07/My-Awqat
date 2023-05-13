import { Spin } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import {
  fetchedArea,
  fetchingArea,
  fetchingAreaError,
} from "../../store/reducers/areaSlice";

const Area = () => {
  const { area, loadingArea } = useSelector((store) => store.area);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchingArea());
    axios
      .get(`https://themealdb.com/api/json/v1/1/filter.php?a=${params.area}`)
      .then((res) => {
        dispatch(fetchedArea(res.data.meals));
      })
      .catch((err) => {
        dispatch(fetchingAreaError(err));
      });
  }, [params]);

  return (
    <>
      <Heading>
        <h1>
          The <span>{params.area}</span> of Meals
        </h1>
      </Heading>
      <Spin spinning={loadingArea}>
        <div className="row py-12">
          {area.map((item) => (
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

export default Area;
