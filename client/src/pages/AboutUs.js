import React from "react";
import Card from "../components/Card/card";
import { Col, Columns, Container } from "../components/Grid";


function App() {
  return (
    <div>

        <Container fluid>
          <Col size="md-12">
            <div className='About'>
          <Card 
          title='Madison Calvo'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01BJKTPXEX-1239d14bdeda-512'
          body='Education: BSA at UT Austin, Hometown: Houston, TX! Desired job: for now, Software Engineer :) Hobby/Trait: I am an identical twin and an aspiring sommelier'/>

        </div>
      

        <div className='About'>
          <Card 
          title='Miguel Maldonado'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01BX9EJY3V-8d7901a29da5-512'
          body='Education: Crockett High School, ACC, Jarvis Christian College, UT. Hometown: Austin Texas born and raised, Desired Job- CEO of Apple. hobby/trait: Grown man that likes Fortnite and drinks coffee every day'/>

        </div>

        <div className='About'>
          <Card 
          title='Ferdninad Aguwa'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01C0JP10JW-a6f78d5dd5f2-512'
          body='Education: Hometown: Desired Job Hobby/trait: '/>

        </div>


        <div className='About'>
          <Card 
          title='Nathaniel Scott'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01B3N85BST-b329110ac62f-512'
          body='Education: Hometown: Desired Job- Hobby/trait:'/>

        </div>


        <div className='About'>
          <Card 
          title='Mario Hernandez'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01CBUQ6Y64-f526abe84c39-512'
          body=' Really likes wings!! '/>

        </div>

        <div className='About'>
          <Card 
          title='Nital Patel'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01BU0W9JSH-7c9f09c5778b-512'
          body=' Education: Hometown: Desired Job- Hobby/trait:'/>

        </div>


        
          </Col>
        </Container>
    </div>
  );
}

export default App;