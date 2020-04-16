import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

const initialState = {
   text: ""
}

class CommentForm extends React.Component {
   state = initialState

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   // we are hard-coding the user id for now
   handleSubmit = (event) => {
      event.preventDefault()

      fetch('http://localhost:3000/comments', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify({ ...this.state, user_id: 2, outfit_id: this.props.outfitId })
      })
         .then(resp => resp.json())
         .then(newComment => {
            this.props.handleNewComment(newComment)
         })
      // clear the form
      this.setState(initialState)
   }

   render() {
      return (
         <Form onSubmit={this.handleSubmit}>
            <Form.Group>
               <Form.Control type="text" name="text" size="sm" placeholder="Comment Here" onChange={this.handleChange} value={this.state.text}/>
            </Form.Group>
            <Button variant="light" type="submit" value="Post Comment">
               Submit Comment
            </Button>
         </Form>
      )
   }
}

export default CommentForm; 