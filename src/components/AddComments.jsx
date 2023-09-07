import { Component } from "react";
import { Form, Button } from "react-bootstrap";
class AddComment extends Component {
    state = {
        newComment: {
            name: "",
            rate: "",
            comment: ""
        }
    }

handleChange = (propertyName, event) => {
    this.setState({newComment: {...this.state.newComment, [propertyName]: event.target.value}})
}

commentPost = async  => {
    
    try{
        const resp = fetch("https://striveschool-api.herokuapp.com/api/comments/" , {
           method: "POST", 
           body: JSON.stringify(this.state.newComment),
        headers: {
            "Content-Type": "application/json",
                "Authorization": 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NWVlYmMwMzRmZjAwMTQwM2Y1MjIiLCJpYXQiOjE2OTQwODg0NjQsImV4cCI6MTY5NTI5ODA2NH0.z56XarkFY2aRas0a9qDIEnDypTwqP4lVYH4w0LRQXgI"
    }})
            if(resp.ok){
                return resp.json();   
                         }
        } catch(err) {
            console.log(err)
        }
}

    render() {
        return (
            <div>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Your name"
                  defaultValue={this.state.newComment.name}
                 onChange={this.commentPost("name")}
                />
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="What's your rating between 1-5"
                 defaultValue={this.state.newComment.rate}
                 onChange={this.commentPost("range")}
                />
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Put a brief comment"
                 defaultValue={this.state.newComment.comment}
                 onChange={this.commentPost("comment")}
                />
                <Button type="submit">Submit form</Button>
                </Form.Group>
                </div>
               )
    }
}

export default AddComment