import React from "react";
import { ListGroup } from "react-bootstrap";

const CommentsList = (props) => {
console.log("stanco", props.arr)
  return (
    <ListGroup>
      {props.arr.map((book, index ) => (
        <ListGroup.Item key={`id-${index}`}>
          <p>Autore: {book.author}</p>
          <p>Commento: {book.comment}</p>
          <strong>Rate: {book.rate}</strong>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentsList;
