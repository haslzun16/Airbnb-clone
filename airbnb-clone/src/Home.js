import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div class="home__container">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div class="home__container">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Home;