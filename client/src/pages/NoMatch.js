import React from "react";
import { Col, Columns, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <div>
    <Container fluid>

        <Col size="md-12">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <img 
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg"
      alt="new"
      />
        </Col>

    </Container>
    </div>
  );
}

export default NoMatch;
