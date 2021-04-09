import React from "react"
import VideoComponent from "../components/VideoComponent";
import Footer from "../components/Footer/Footer.js";
import Blog from "../components/Blog/Blog.js";
import FastCarousel from "../components/InfiniteCarousel/FastCarousel";
import DogImage from "../images/dogs.jpeg"
import "./Home.css"




function Home() {
    return (
      <>

    <VideoComponent />
    {/* <Blog /> */}
    <FastCarousel />
    <div className="DogImage">
      <img className="dogPhoto" src={DogImage}/>
    </div>
    <Footer />

      </>
    );
  }


export default Home;
