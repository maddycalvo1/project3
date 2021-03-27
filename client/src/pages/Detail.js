import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Columns, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Columns>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {book.title} by {book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Columns>
        <Columns>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {book.synopsis}
              </p>
            </article>
          </Col>
        </Columns>
        <Columns>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Columns>
      </Container>
    );
  }


export default Detail;
