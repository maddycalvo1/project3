import React from "react";
import Card from "../components/Card/card";
import { Col, Columns, Container } from "../components/Grid";
import "./AboutUs.css"
import Footer from "../components/Footer/Footer.js";


function App() {
  return (
    <div>

        <Container fluid>
          <Columns className="columnStyle">
            <div className='About'>
          <Card 
          title='Madison Calvo'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01BJKTPXEX-1239d14bdeda-512'
          body='Education: BSA at UT Austin, Hometown: Houston, TX! Desired job: for now, Software Engineer :) Hobby/Trait: I am an identical twin and an aspiring sommelier'/>

        </div>
      

        <div className='Mig'>
          <Card 
          title='Miguel Maldonado'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01BX9EJY3V-8d7901a29da5-512'
          body='Education: Crockett High School, ACC, Jarvis Christian College, UT. Hometown: Austin Texas born and raised, Desired Job- CEO of Apple. hobby/trait: Grown man that likes Fortnite and drinks coffee every day'/>

        </div>

        <div className='Ferd'>
          <Card 
          title='Ferdninad Aguwa'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01C0JP10JW-a6f78d5dd5f2-512'
          body='Education: University of North Texas. Hometown: Fort Worth TX  Desired Job-Full Stack Web Developer Hobby/trait: Basketball, Football, Madden'/>
        

        </div>

        </Columns>
        <br />
        <br />

      <Columns className="columnStyle">
        <div className='Ferd'>
          <Card 
          title='Nathaniel Scott'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01B3N85BST-b329110ac62f-512'
          body='Education: University of North Texas. Hometown: Austin TX  Desired Job-Senior Software Engineer Hobby/trait: Camping, Traveling, and Gaming'/>

        </div>


        <div className='Mario'>
          <Card 
          title='Mario Hernandez'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01CBUQ6Y64-f526abe84c39-512'
         body='Education: University of North Texas. Hometown: Austin TX  Desired Job-Senior Software Engineer Hobby/trait: Stocks, Riding Motorcycles'/>
       

        </div>

        <div className='Nital'>
          <Card 
          title='Nital Patel'
          imageUrl='https://ca.slack-edge.com/T01B5QPJR45-U01BU0W9JSH-7c9f09c5778b-512'
          body='Education: Texas Tech University Hometown: Abilene TX Desired Job-Front End Web Developer Hobby/trait:Trained with mens tennis program from 2015-2017,NCAA Big 12 Championship.' />

        </div>


        
          </Columns>
        </Container>
<br/>
<br/>
        <Footer />

    </div>

  );
}

export default App;