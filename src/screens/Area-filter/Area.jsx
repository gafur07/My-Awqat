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
import { addToCart } from "../../store/reducers/cartSlice";

const Area = () => {
  const { area, loadingArea } = useSelector((store) => store.area);
  const { basket } = useSelector(store => store.cart)
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

  function addCart(meal) {
    dispatch(addToCart(meal))
  }
  console.log(basket)
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
            <div className="item cursor-pointer" key={item.idMeal}>
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

export default Area;
