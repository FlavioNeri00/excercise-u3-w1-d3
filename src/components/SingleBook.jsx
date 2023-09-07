import React, { Component } from "react";
import { Card, Container, Button } from "react-bootstrap";
import CommentArea from "./CommentArea"; 

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState ({
      selected: !this.state.selected,
    });
  };

  render() {
    return (
      <div>
        <Container fluid="xl">
          <Card
           
            style={{ borderColor: this.state.selected ? "red" : "grey" }}
          >
            <Card.Img variant="top" src={this.props.img}  onClick={this.toggleSelected}/>
            <Card.Body>
              <Card.Title className="truncate">{this.props.title}</Card.Title>
              <strong style={{ display: "block" }}>{this.props.price}</strong>
              <strong>{this.props.asin}</strong>
              <Button variant="primary" className="mt-3" onClick={this.toggleSelected}>
                Comments
              </Button>
              
              {this.state.selected && (
                <CommentArea asin={this.props.asin} />
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default SingleBook;
