import React from 'react';
import { Card, CardGroup, CardTitle } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';


class OutfitCard extends React.Component {

    render() {
        const outfit = this.props.outfit
        const top = this.props.outfit.top
        const user = this.props.outfit.user
        
        return (
            <Container>
                <Container><strong>{outfit.name}</strong></Container>
                <Row>
                    <Col>
                            <img className="card-img-top" src={top.img_url} alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">{top.name}</h6>
                            </div>
                    </Col>
                    <Col>
                            <img className="card-img-top" src={top.img_url} alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">{top.name}</h6>
                            </div>
                    </Col>
                    <Col>
                            <img className="card-img-top" src={top.img_url} alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title">{top.name}</h6>
                            </div>
                    </Col>
                </Row> 
                <br></br>
            </Container>
        )
    }
}

export default OutfitCard; 