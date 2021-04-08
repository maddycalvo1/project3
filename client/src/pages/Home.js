import React from "react"
import VideoComponent from "../components/VideoComponent";
import Footer from "../components/Footer/Footer.js";
import Blog from "../components/Blog/Blog.js";
import FastCarousel from "../components/InfiniteCarousel/FastCarousel";





function Home() {
    return (
      <>

    <VideoComponent />
    {/* <Blog /> */}
    <FastCarousel />
    <Footer />

      </>
    );
  }


export default Home;
