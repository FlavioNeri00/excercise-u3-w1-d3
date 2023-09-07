import { Component } from "react";

import CommentsList from "./CommentsList";
import AddComment from "./AddComments";

class CommentArea extends Component {
    state = {
        comment: []
        
    }
    fetchingBooks = async () => { 
       
        
        const URL = "https://striveschool-api.herokuapp.com/api/comments/"
        console.log(this.state)
        try {
            const resp = await fetch( URL + this.props.asin, {
                headers: {
                    "Authorization": 
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NWVlYmMwMzRmZjAwMTQwM2Y1MjIiLCJpYXQiOjE2OTQwODg0NjQsImV4cCI6MTY5NTI5ODA2NH0.z56XarkFY2aRas0a9qDIEnDypTwqP4lVYH4w0LRQXgI"
                }})
                if (resp.ok) {
                    console.log("YOU DID IT")
                    const data = await resp.json() 
                    this.setState({comment: data})
                    
                }  else {
                    console.log("error while fetching")
                }}           
                catch(err) {console.log(err)}}
                componentDidMount = () => {
                    this.fetchingBooks()
                }
                render(){
        return(
        <div>  
            <AddComment />
          <CommentsList  arr={this.state.comment}/>
      </div>
        
        )
    }
}


export default CommentArea