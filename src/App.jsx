import 'bootstrap/dist/css/bootstrap.min.css';
import React, {  useState } from "react";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { Container, Row, Col } from "react-bootstrap";
import fantasy from "./books/fantasy.json"
const App = () => {
  
  const [selectedBookAsin, setSelectedBookAsin] = useState(null)


  const handleBookSelection = (asin) => {
    setSelectedBookAsin( asin );
  };
  
 
    return (
      <Container fluid>
        <Row>
          <Col xs={8}>
            <BookList arr={fantasy} BookSelectionAsin={handleBookSelection} />
          </Col>
          <Col xs={4}>
            <CommentArea  arr={fantasy} asin={selectedBookAsin} />
          </Col>
        </Row>
      </Container>
    );
  }


export default App;
