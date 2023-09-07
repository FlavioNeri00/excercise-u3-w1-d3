import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBookAsin: null,
  };

  getQuery = (query, selectedBookAsin) => {
    this.setState({ searchQuery: query, selectedBookAsin });
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
              onChange={(event) =>
                this.getQuery(event.target.value, this.state.selectedBookAsin)
              }
            />
            <Button type="submit">Search</Button>
          </Form.Group>

          <Row className="gy-3">
            {this.props.arr
              .filter((elem) =>
                elem.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
              )
              .map((elem, index) => (
                <Col xs={3} key={`id-${index}`}>
                  <SingleBook
                    img={elem.img}
                    title={elem.title}
                    price={elem.price}
                    asin={elem.asin}
                    // Passa l'asin del libro come prop
                    onClick={() => this.getQuery(this.state.searchQuery, elem.asin)}
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
