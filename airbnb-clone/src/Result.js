import React from "react";
import "./Result.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function Result({ image, location, title, description, star, price, total }) {
  return (
    <div className="result">
      <img src={image} alt="" />
      <FavoriteBorderIcon className="result__heart" />
      <div class="result__info">
        <div class="result__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div class="result__infoBottom">
          <div class="result__stars">
            <StarIcon className="result__starIcon" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div class="result__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
