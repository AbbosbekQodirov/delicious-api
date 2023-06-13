import React, { useContext } from 'react'
import { ThemeContext } from "../App";
function Loader() {
  const { loader, setLoader } = useContext(ThemeContext);
  return (
    <div className="loader">
      <img
      onClick={()=>{
        setLoader(false)
      }}
        src="https://cdn.dribbble.com/users/1215152/screenshots/12858414/food_loader_animation.gif"
        alt=""
      />
      {/* <img src="./images/1.gif" alt="" /> */}
    </div>
  );
}

export default Loader