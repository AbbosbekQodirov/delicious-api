import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import Loader from "./Loader";

function Cuisine() {
  const { setLoader, loader } = useContext(ThemeContext);
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    setLoader(true)
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=51d0e725a5f9407891c4892e29d1c70a&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
    setLoader(false)
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{opacity: 0}}
      transition={{duration :0.5}}
      className="grid"
    >
      {loader && <Loader/>}
      {cuisine.map((item) => {
        return (
          <div key={item.id} className="grid_card">
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Cuisine;

// useEffect(()=>{
//     console.log(params);
// }, [])
