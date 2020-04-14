import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


const OptionCard = props => {

    const renderProducts = products => {
        return products.map( product => {
            return <div className="resp">{card(product)}</div>
        })
    }

    const card = product => {
        return (
            <div className="productCards">
            <div className="gallery">
                    <img src={product.img_url} alt={product.name}/>
                <div className="desc">
                    <h6>{product.name}</h6>
                    <Button variant="outline-secondary"> + Select </Button>{' '}
                    <Button variant="outline-secondary"> - Remove </Button>{' '}
                </div>
            </div>
        </div>
        )
    }

    return (
        <Container fluid>
            <Col className="options">
                <Tabs defaultActiveKey="tops" transition={false} id="noanim-tab-example">
                <Tab eventKey="tops" title="Tops" className="links">
                    {props.tops.length !== 0 ? renderProducts(props.tops) : <p>You don't have any tops in your wardrobe!</p>}
                </Tab>
                <Tab eventKey="bottoms" title="Bottoms" className="links">
                    {props.bottoms.length !== 0 ? renderProducts(props.bottoms) : <p>You don't have any bottoms in your wardrobe!</p>}
                </Tab>
                <Tab eventKey="shoes" title="Shoes" className="links">
                    {props.shoes.length !== 0 ? renderProducts(props.shoes) : <p>You don't have any shoes in your wardrobe!</p>}
                </Tab>
                </Tabs>
            </Col>
        </Container>
    )
}

export default OptionCard