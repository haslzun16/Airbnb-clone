import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./Result";

function SearchPage() {
  return (
    <div className="searchPage">
      <div class="searchPage__info">
        <p> 62 stays 26 august to 30 </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        image="https://specials-images.forbesimg.com/imageserve/5e05ae84e961e1000739fd8f/960x0.jpg?fit=scale"
        location="Private room in downtown Miami"
        title="Stay at this cozy house"
        description="1 guest 1 bedroom 1 bed 1.5 shared"
        star={4.5}
        price="$80 / night"
        tota="$200 total"
      />
      <SearchResult
        image="https://specials-images.forbesimg.com/imageserve/5e05ae84e961e1000739fd8f/960x0.jpg?fit=scale"
        location="Private room in downtown Miami"
        title="Stay at this cozy house"
        description="1 guest 1 bedroom 1 bed 1.5 shared"
        star={4.5}
        price="$80 / night"
        tota="$200 total"
      />
    </div>
  );
}

export default SearchPage;
