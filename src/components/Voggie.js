import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
// import { useFetch } from "./useFetch";
import Loader from "../pages/Loader";
function Veggie() {

  // const { data } = useFetch(
  //   `https://api.spoonacular.com/recipes/random?apiKey=123ff4c23fca429183404edb18eee868&number=12&tags=vegetarian`
  // );
  // console.log(data);

  const { loader, setLoader } = useContext(ThemeContext);
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  // db254b5cd61744d39a2deebd9c361444;
  // 51d0e725a5f9407891c4892e29d1c70a
  // d1f70067f78248078e71a58983a18e5f;
  // cb1c464d94f142c08b156c5beddade8b;
  // 1f9d617ba13041859ea773423b0e6291
  // ab407f8187a9464a934d49cf360543c0;
  // 123ff4c23fca429183404edb18eee868

  const getVeggie = async () => {
    setLoader(true)
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=6&tags=vegetarian`
    );
    const data = await api.json();
    setLoader(false)

    setVeggie(data.recipes);
  };

  //localdan

  // const getVeggie = async () => {
  //   const check = localStorage.getItem("veggie");
  //   if (check) {
  //     setVeggie(JSON.parse(check));
  //   } else {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=db254b5cd61744d39a2deebd9c361444&number=12`
  //     );
  //     const data = await api.json();
  //     localStorage.setItem("veggie", JSON.stringify(data.recipes));
  //     setVeggie(data.recipes);
  //     console.log(data.recipes);
  //   }
  // };

  return (
    <div className="wrapper">
      {loader && <Loader />}
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          // arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
          type: "loop",
          resetProgress: false,
          rewind: true,
          rewindSpeed: 100,
          autoplay: true,
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="card">
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="gradient"></div>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Veggie;
