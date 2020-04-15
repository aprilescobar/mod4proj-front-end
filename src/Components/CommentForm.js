import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

const initialState = {
   text: "", 
   displayName: ""
}

class CommentForm extends React.Component {
   state = initialState

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()

      fetch('http://localhost:3000/comments', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify({ ...this.state, outfit_id: this.props.outfitId })
      })
         .then(resp => resp.json())
         .then(newComment => {
            this.props.handleNewComment(newComment)
         })
      this.setState(initialState)
   }

   render() {
      return (
         <Form onSubmit={this.handleSubmit}>
            <Form.Group>
               <Form.Control type="text" name="text" size="sm" placeholder="Comment Here" onChange={this.handleChange} value={this.state.text}/>
               <Form.Control type="text" name="displayName" size="sm" placeholder="Your Display Name" onChange={this.handleChange} value={this.state.displayName}/>
            </Form.Group>
            <Button variant="light" type="submit" value="Post Comment">
               Submit Comment
         </Button>
         </Form>
      )
   }
}

export default CommentForm; 