import React from 'react'
import CreateForm from '../Components/CreateForm'
import OptionCard from '../Components/OptionCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



export default class CreateOutfit extends React.Component {    
    render () {
        console.log("inside Create Outfit", this.props)
        return (
            <Container>
                <h3>Create Outfit!</h3>
                <Row>
                    <Col sm={4}>
                        <CreateForm />
                    </Col>
                    <Col sm={8}>
                        <OptionCard {...this.props}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}