import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingCategories,
  fetchingErrorCategories,
  fetchedCategories,
} from "../../store/reducers/categorySlice";
import "./Home.scss";
import { Spin } from "antd";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  const { loadingCategories, categories } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCategories());
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res);
        dispatch(fetchedCategories(res.data.categories));
      })
      .catch((err) => {
        dispatch(fetchingErrorCategories(err));
        console.log(err);
      });
  }, []);

  return (
    <>
      <Heading className="heading">
        <h1>
          Fresh And <span>Organic</span> Products For You
        </h1>
        <p className="my-4">
          Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It
          Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making
          It Over 2000 Years Old
        </p>
        <button className="btn rounded-md py-2 px-6 outline-none">
          Shop Now
        </button>
      </Heading>
        <Spin spinning={loadingCategories}>
          <div className="bg-[#e6e7e5]">
          <div className="row py-12">
            {categories?.map((item) => (
              <div className="item cursor-pointer">
                <Link to={`category/${item.strCategory}`} key={item.idCategory}>
                  <img src={item.strCategoryThumb} />
                </Link>
                <div className="item__body" key={item.idCategory}>
                  <h1 className="w-full">{item.strCategory}</h1>
                </div>
              </div>
            ))}
          </div>
          </div>
        </Spin>
    </>
  );
};

export default Home;
