
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const SingleBook = (props) => { 
  
const [selected, setSelected] = useState(false)


 const toggleSelected = () => {
   setSelected (!selected,
    );
  };

  
  
    return (
      <div>
        
          <Card  onClick={toggleSelected}  style={{border: selected ? "2px solid red" : "none" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title className="truncate">{props.title}</Card.Title>
              <strong style={{ display: "block" }}>{props.price}</strong>
              <strong>{props.asin}</strong>
              <Button
                variant="primary"
                className="mt-3"
                onClick={() => props.BookSelectionAsin(props.asin)}
              >
                Open Comments
              </Button>
            </Card.Body>
          </Card>
     
      </div>
    );
  }


export default SingleBook;

