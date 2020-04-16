import React from 'react'
import CreateForm from '../Components/CreateForm'
import OptionCard from '../Components/OptionCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class CreateOutfit extends React.Component {

    state = {
        name: "",
        top_id: "",
        top_url: "",
        bottom_id: "",
        bottom_url: "",
        shoe_id: "",
        shoe_url: ""
    }

    handleSelect = e => {
        const img_url = e.target.value
        const category = e.target.name
        const product_id = parseInt(e.target.id, 0)
        if (category === "tops"){
            this.setState({top_id: product_id, top_url: img_url})
        } if (category === "bottoms"){
            this.setState({bottom_id: product_id, bottom_url: img_url})
        } if (category === "shoes"){
            this.setState({shoe_id: product_id, shoe_url: img_url})
        }
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
            top_id: "",
            top_url: "",
            bottom_id: "",
            bottom_url: "",
            shoe_id: "",
            shoe_url: ""
        })
    }

    postToDataBase = () => {
        let name = this.state.name
        let top_id = parseInt(this.state.top_id, 0)
        let bottom_id = parseInt(this.state.bottom_id, 0)
        let shoe_id = parseInt(this.state.shoe_id, 0)
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
        alert("Outfit Created 🙌🏼")
    }

    render () {
        console.log("inside Create Outfit", this.state)
        return (
            <Container>
                <h3>Create Outfit!</h3>
                <Row>
                    <Col sm={4} className="options">
                        <CreateForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    </Col>
                    <Col sm={8}>
                        <OptionCard {...this.props} handleSelect={this.handleSelect}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

