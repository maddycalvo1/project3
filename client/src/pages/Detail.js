import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import Footer from "../components/Footer/Footer";
import { Col, Columns, Container } from "../components/Grid";
import Blog from "../components/Blog/Blog";
// import Posts from "../components/Posts";
import CreatePostForm from "../components/CreatePostForm";
import Posts from "../components/Posts/Posts";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";


const Detail = props => {

  const { linkData } = props.location.state;

  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getBlogs(linkData.place_id)
      .then(res => dispatch({ post: res.data }))
      .catch(err => console.log(err));
  }, []);

  console.log('log: linkData ', linkData);


  return (
    <Container fluid>
      <Columns>
          <Col size="is-12">
            <h1 className="hero">{linkData.name}</h1>
            <div>
            {/* <Posts placeId={linkData.place_id} /> */}
            <CreatePostForm/>
            <Posts/>
            </div>
          </Col>
      </Columns>
      <Footer></Footer>
      
    </Container>
  );
  }


export default Detail;
