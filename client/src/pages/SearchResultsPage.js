import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Columns, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";


function PageLayout() {
 
    return (
      <Container fluid>
        <Columns>
          <Col size="is-12">
            <List>
{/* add to this List component */}
              
            </List>
          </Col>
          </Columns>
          
      </Container>
    );
  }


export default PageLayout;
