import React from "react"
import VideoComponent from "../components/VideoComponent";
import Footer from "../components/Footer/Footer.js";
import Blog from "../components/Blog/Blog.js";
import FastCarousel from "../components/InfiniteCarousel/FastCarousel";
import DogImg from "../images/dogs.jpeg"
import "./Home.css"




function Home() {
    return (
      <>

    <VideoComponent />
    {/* <Blog /> */}
    <FastCarousel />
    <div className="dawgs">
    <img className="dogimage" src={DogImg} alt="Dogs Looking Up" />
    </div>

    <Footer />

      </>
    );
  }


export default Home;
