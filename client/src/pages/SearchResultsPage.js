import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Columns, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn/SearchBtn";
import CurrentBtn from "../components/CurrentBtn/CurrentBtn";

function PageLayout() {
 
    return (
      <Container fluid>
        <Columns>
          <Col size="is-12">
            <Jumbotron>
            </Jumbotron>

            <List></List>
          </Col>
          </Columns>
          
      </Container>
    );
  }


export default PageLayout;
