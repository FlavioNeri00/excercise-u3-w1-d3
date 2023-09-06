import { Component } from "react"
import { Card, Button, Container } from "react-bootstrap"
import "../App.css"
class SingleBook extends Component {

    state = {
        selected : false
    }
   
    render()
    { return (
        
        <Container fluid="xl">
        
    <Card style={{ height: "700px" }}>
    <Card.Img variant="top" src={this.props.img} />
    <Card.Body  onClick={this.changeSelected}>
      <Card.Title className="truncate">{this.props.title}</Card.Title>
      <strong style={{display:"block"}}>{this.props.price}</strong>
      <Button variant="primary" className="mt-3">Go somewhere</Button>
    </Card.Body>

  </Card>
  
  </Container>)
  
}}
    
    
export default SingleBook