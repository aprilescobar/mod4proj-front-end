import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CreateForm = props => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" name="name" placeholder="Outfit Name" value={props.name} onChange={props.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" name="top" placeholder="Select Top" value={props.top} onChange={props.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" name="bottom" placeholder="Select Bottom" value={props.bottom} onChange={props.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" name="shoe" placeholder="Select Shoe" value={props.shoe} onChange={props.handleChange}/>
            </Form.Group>
            <Button variant="outline-secondary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CreateForm
