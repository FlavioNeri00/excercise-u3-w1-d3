import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { Container, Row, Col } from "react-bootstrap";
import fantasy from "./books/fantasy.json"
class App extends Component {
  state = {
    selectedBookAsin: null,
    selected: false
  };

  handleBookSelection = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={8}>
            <BookList arr={fantasy} BookSelectionAsin={this.handleBookSelection} />
          </Col>
          <Col xs={4}>
            <CommentArea  arr={fantasy} asin={this.state.selectedBookAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
