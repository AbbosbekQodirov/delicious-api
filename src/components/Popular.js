import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import Loader from "../pages/Loader";
function Popular() {
  const [popular, setPopular] = useState([]);
const { loader, setLoader } = useContext(ThemeContext);
  useEffect(() => {
    getPopular();
  }, []);

  //Localdan

  // const getPopular = async () => {
  //   const check = localStorage.getItem("popular");
  //   if (check) {
  //     setPopular(JSON.parse(check));
  //   } else {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=db254b5cd61744d39a2deebd9c361444&number=12`
  //     );
  //     const data = await api.json();
  //     localStorage.setItem("popular", JSON.stringify(data.recipes));
  //     setPopular(data.recipes);
  //     console.log(data.recipes);
  //   }
  // };


    const getPopular = async () => {
      setLoader(true);
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=6`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      setLoader(false);
    };

  return (
    <div className="wrapper">
      {loader && <Loader/>}
      <h3>Popular picks</h3>
      <Splide
        options={{
          perPage: 4,
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
        {popular &&
          popular.map((recipe) => {
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

export default Popular;
