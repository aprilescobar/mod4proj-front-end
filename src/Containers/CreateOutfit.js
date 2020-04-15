import React from 'react'
import CreateForm from '../Components/CreateForm'
import OptionCard from '../Components/OptionCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



export default class CreateOutfit extends React.Component {

    state = {
        name: "",
        top: "",
        bottom: "",
        shoe: ""
    }

    handleChange = e => {
        const key = e.target.name
        const value = e.target.value
        this.setState({[key]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postToDataBase()
        this.setState({
            name: "",
            top: "",
            bottom: "",
            shoe: ""
        })
    }

    postToDataBase = () => {
        let name = this.state.name
        let top_id = parseInt(this.state.top, 0)
        let bottom_id = parseInt(this.state.bottom, 0)
        let shoe_id = parseInt(this.state.shoe, 0)
        let user_id = 1
        
        fetch("http://localhost:3000/outfits", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify ({
                top_id,
                bottom_id,
                shoe_id,
                user_id,
                likes: 0,
                name
            })
        })
        .then(res => res.json())
        .then(outfit => console.log(outfit))
    }

    render () {
        // console.log("inside Create Outfit", this.state)
        return (
            <Container>
                <h3>Create Outfit!</h3>
                <Row>
                    <Col sm={4}>
                        <CreateForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    </Col>
                    <Col sm={8}>
                        <OptionCard {...this.props}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

{/* // of1 = Outfit.create(top_id: 5, bottom_id: 2, shoe_id: 6, user_id: 1, likes: 0, name: "Basic") */}

