import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Columns, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer/Footer"
// need to import the data from the API using useEffect



function PageLayout() {
    const [allData, setAllData] = useState([])
    const [zipcode, setZipcode] = useState("")
    const [zip, setZip] = useState("")

    useEffect(() => {
      if (zipcode.length === 5) {
        API.searchParks(zipcode).then(res => {
          setAllData(res.data.results)
          // console.log(res.data.results);
        })
      }
    }, [zipcode])

    return (
      <Container fluid>
        <Columns>
          <Col size="is-12">
        <input name="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
        <button onClick={() => setZipcode(zip)}>Enter Zipcode</button>
          <h3 className="title">{allData[0]?.plus_code?.compound_code.split(" ").splice(1).join(" ")}</h3>
              <ol>
                {allData.map((data, index) => (
                  <li key={index} id={data.place_id}>
                    <Link to={{pathname: "/Detail", state: {linkData: data}}}><a>{data.name}</a></Link>
                    </li>
                ))}
              </ol>
            <List></List>
          </Col>
          </Columns>
          <Footer></Footer>
          
      </Container>
    );
  }


export default PageLayout;
