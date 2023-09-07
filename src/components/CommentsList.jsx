import React from "react";
import { ListGroup } from "react-bootstrap";

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.arr.map((book ) => (
        <ListGroup.Item key={book._id}>
          <p>Autore: {book.author}</p>
          <p>Commento: {book.text}</p>
          <strong>Rate: {book.rate}</strong>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentsList;
