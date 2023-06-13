import React, { useContext } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const { setLoader } = useContext(ThemeContext);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    
  };

  return (
    <form onSubmit={submitHandler} className="formStyle">
      <div>
        <FaSearch />
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        />
      </div>
    </form>
  );
}

export default Search;
