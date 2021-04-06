import React from "react"
import VideoComponent from "../components/VideoComponent";
import Footer from "../components/Footer/Footer.js";
import Blog from "../components/Blog/Blog.js";
import InfiniteCarousel from "../components/InfiniteCarousel/index";





function Home() {
    return (
      <>

    <VideoComponent />
    {/* <Blog /> */}
    <InfiniteCarousel />
    <Footer />

      </>
    );
  }


export default Home;
