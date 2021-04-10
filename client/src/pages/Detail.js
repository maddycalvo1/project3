import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import Footer from "../components/Footer/Footer";
import { Col, Columns, Container } from "../components/Grid";
import Blog from "../components/Blog/Blog";



function Detail(props) {

  const { linkData } = props.location.state;
  console.log('log: linkData ', linkData);

  return (
    <Container fluid>
      <Columns>
          <Col size="is-12">
            <h1 className="hero">{linkData.name}</h1>
            <div>
            <Blog placeId={linkData.place_id} />
            </div>
          </Col>
      </Columns>
      <Footer></Footer>
      
    </Container>
  );
  }


export default Detail;
