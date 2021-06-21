import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
   
        <div class="home__section">
          <Card
            src="https://media.timeout.com/images/105154886/630/472/image.jpg"
            title="Entire homes"
            description="Comfortable Private places with room for friends or family"
          />
          <Card
            src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024,h_683/http://thewanderingblonde.com/wp-content/uploads/Most-Unique-Airbnbs-in-California-3-1024x683.jpg"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep"
          />
          <Card
            src="https://beebom.com/wp-content/uploads/2020/04/Airbnb-online-experience-feat..jpg"
            title="Online Experiences"
            description="Unique activites we can fo together, led by a world of hosts"
          />
        </div>
        <div class="home__section">
          <Card
            src="https://www.igms.com/wp-content/uploads/2017/12/airbnb-photos.pic1_.jpeg"
            title="1 Bedroom apartment"
            description="Superhost with great amenities and a fabolous shopping complex nearby"
            price="$80/night"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIfb2tv9Ss5Faou6WLEYm00Po4MMj9Xe4nQ&usqp=CAU"
            title="Penthouse in Charlotte"
            description="Enjoy the amazing sights of Charlotte with this amazing view"
            price="$400/night"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFTpnVln32K8uMdKtyro5llfkIfqe8m2T7w&usqp=CAU"
            title="3 Bedroom Flat in Raliegh"
            description="Superhost with a stunning view of the beachside in sunny Miami Florida"
            price="$150/night"
          />
        </div>
      
    </div>
  );
}

export default Home;
