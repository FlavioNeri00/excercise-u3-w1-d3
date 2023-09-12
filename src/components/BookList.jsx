
import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BookList = (props) => {
 

  const [searchQuery, setSearchQuery] = useState("")


  const handleQueryChange = (event) => {
   setSearchQuery(event.target.value);
  };

  
    return (
      <div>
        <Container fluid="xl">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search"
              aria-describedby="inputGroup-sizing-default"
              value={searchQuery}
              onChange={handleQueryChange}
            />
            <Button type="submit">Search</Button>
          </Form.Group>

          <Row className="gy-5">
            {props.arr
              .filter((elem) =>
                elem.title.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((elem) => (
                <Col xs={3} key={`id-${elem.asin}`}>
                  <SingleBook
                    img={elem.img}
                    title={elem.title}
                    price={elem.price}
                    asin={elem.asin}
                     BookSelectionAsin={props.BookSelectionAsin} 
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }


export default BookList;
