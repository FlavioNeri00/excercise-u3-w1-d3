import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  handleQueryChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    return (
      <div>
        <Container fluid="xl">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search"
              aria-describedby="inputGroup-sizing-default"
              value={this.state.searchQuery}
              onChange={this.handleQueryChange}
            />
            <Button type="submit">Search</Button>
          </Form.Group>

          <Row className="gy-5">
            {/* {this.props.arr
              .filter((elem) =>
                elem.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
              ) */}
              {this.props.arr.map((elem) => (
                <Col xs={3} key={`id-${elem.asin}`}>
                  <SingleBook
                    img={elem.img}
                    title={elem.title}
                    price={elem.price}
                    asin={elem.asin}
                     BookSelectionAsin={this.props.BookSelectionAsin} 
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
