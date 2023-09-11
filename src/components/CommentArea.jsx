import { Component } from "react";

import CommentsList from "./CommentsList";
import { Container } from "react-bootstrap";
// import AddComment from "./AddComments";

class CommentArea extends Component {
    state = {
        comment: [],
        
    }
    fetchingBooks = async () => { 
       
        
        const URL = "https://striveschool-api.herokuapp.com/api/comments"
        
        try {
            const resp = await fetch( URL, {
                headers: {
                    "Authorization": 
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NWVlYmMwMzRmZjAwMTQwM2Y1MjIiLCJpYXQiOjE2OTQwODg0NjQsImV4cCI6MTY5NTI5ODA2NH0.z56XarkFY2aRas0a9qDIEnDypTwqP4lVYH4w0LRQXgI"
                }})
                if (resp.ok) {
                    console.log("YOU DID IT")
                    const data = await resp.json() 
                    const filteredComments = data.filter((comm) => comm.elementId === this.props.asin)
                   this.setState({comment: filteredComments})
                    console.log("data", data);
                }  else {
                    console.log("error while fetching")
                }}           
                catch(err) 
                {console.log(err)}}
               
                 componentDidMount() {
                   
                      this.fetchingBooks();
                    }
                
                
                  componentDidUpdate(prevProps) {
                  if (prevProps.asin !== this.props.asin){
                    this.fetchingBooks()
                  }
                  }
                
                
                  render() {
                    console.log(this.props.asin)
                    console.log("ei", this.state.comment)
                    return (
                      <Container>
                        <h1>Commenti per il libro</h1>
                        <CommentsList arr={this.state.comment} />
                       
                      </Container>
                    );
                  }
                }
                
                export default CommentArea;
                