import React from "react";
import splatter from "../../images/splatter.png";
import "./index.css";

const Picture = () => {
  return (
    <div className="imageContainer">
      <div className="image">
        <img src={splatter} alt="a room" />
      </div>
    </div>
  );
};

export default Picture;
