import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import Loader from "./Loader";
import { useFetch } from "../components/useFetch";

function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const { setLoader, loader } = useContext(ThemeContext);

  let params = useParams();

  const getSearched = async (name) => {
    setLoader(true);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=51d0e725a5f9407891c4892e29d1c70a&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
    setLoader(false);
    console.log(searchedRecipe.length);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="grid">
      {loader && <Loader />}
      {!searchedRecipe.length && (
        <div>
          <h1>Please, Enter the name of the delicious dish correctly :)</h1>
        </div>
      )}
      {searchedRecipe.map((item) => {
        return (
          <div key={item.id} className="grid_card">
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
