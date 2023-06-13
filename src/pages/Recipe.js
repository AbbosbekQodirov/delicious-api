import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import Loader from "../pages/Loader";
function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const { loader, setLoader } = useContext(ThemeContext);
  const fetchDetails = async () => {
    setLoader(true)
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=51d0e725a5f9407891c4892e29d1c70a`
    );
    const detailData = await data.json();
    setDetails(detailData);
    setLoader(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="detailWrapper">
      {loader && <Loader/>}
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div className="info">
        <button
          onClick={() => {
            setActiveTab("instructions");
          }}
          className={activeTab === "instructions" ? "active" : ""}
        >
          Instructions
        </button>
        <button
          onClick={() => {
            setActiveTab("ingredients");
          }}
          className={activeTab === "ingredients" ? "active" : ""}
        >
          Ingredients
        </button>

        {activeTab === "instructions" && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;
