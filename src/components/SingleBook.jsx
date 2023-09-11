import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
        
          <Card  onClick={this.toggleSelected}  style={{border: this.state.selected ? "2px solid red" : "none" }}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
              <Card.Title className="truncate">{this.props.title}</Card.Title>
              <strong style={{ display: "block" }}>{this.props.price}</strong>
              <strong>{this.props.asin}</strong>
              <Button
                variant="primary"
                className="mt-3"
                onClick={() => this.props.BookSelectionAsin(this.props.asin)}
              >
                Open Comments
              </Button>
            </Card.Body>
          </Card>
     
      </div>
    );
  }
}

export default SingleBook;

