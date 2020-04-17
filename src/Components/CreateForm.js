import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CreateForm = props => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" name="name" placeholder="Name Your Outfit!" value={props.name} onChange={props.handleChange}/>
            </Form.Group>
            <div className="productCards">
                <div className="gallery">
                        <img src={props.top_url ? props.top_url : "https://www.victoriassecret.com/p/760x1013/tif/24/ed/24ed839540694433a0317339b06630a5/V495974_OM_F.jpg"} alt="Select a Top"/>
                </div>
            </div>
            <div className="productCards">
                <div className="gallery">
                        <img src={props.bottom_url ? props.bottom_url : "https://calvinklein.scene7.com/is/image/CalvinKlein/51475735_001_alternate2?wid=852&hei=1122&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0"} alt="Select a Bottom"/>
                </div>
            </div>
            <div className="productCards">
                <div className="gallery">
                        <img src={props.shoe_url ? props.shoe_url : "https://image1.masterfile.com/getImage/NjEwOC0wNTg2OTQ1MGVuLjAwMDAwMDAw=AFvWAh/6108-05869450en_Masterfile.jpg"} alt="Select a Shoe"/>
                </div>
            </div> <br/>
            <div className="submitForm">
                <Button variant="outline-secondary" type="submit">
                    Submit
                </Button>
            </div>
                <br/>
        </Form>
    )
}

export default CreateForm
