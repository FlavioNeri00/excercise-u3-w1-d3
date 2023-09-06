import SingleBook from "./SingleBook"
import {Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"
const BookList = (props) => (
    <div>
        <Container fluid="xl" >
    <InputGroup className="mb-3">
        <Form.Control
           placeholder="Search"
          aria-describedby="inputGroup-sizing-default"
        />
        <Button type="submit">Search</Button>
      </InputGroup>

        <Row className="gy-3">
   {props.arr.map((elem, index) => (
    <Col xs={3} key={`id-${index}`} >
   <SingleBook 
   img={elem.img} 
   title={elem.title} 
   price={elem.price}/>
   </Col>
 ))}
 </Row>
  </Container>
  </div>
)

export default BookList