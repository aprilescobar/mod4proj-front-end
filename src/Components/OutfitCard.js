import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


class OutfitCard extends React.Component {

    render() {
        console.log(this.props.outfit)
        const outfit = this.props.outfit
        const top = this.props.outfit.top
        const user = this.props.outfit.user
        const bottom = this.props.outfit.bottom
        const shoe = this.props.outfit.shoe
        const likes = this.props.outfit.likes
        
        return (
            <Container className="outfitContainer">
                <br></br>
                <Container>
                    <p className="outfitTitle">{outfit.name}</p>
                </Container>
                <Row>
                    <Col>
                            <img className="outfitImage" src={top.img_url} alt={top.name} />
                            <div className="card-body">
                                <h6 className="cardTitle">{top.name}</h6>
                            </div>
                    </Col>
                    <Col>
                            <img className="outfitImage" src={bottom.img_url} alt={bottom.name} />
                            <div className="card-body">
                                <h6 className="cardTitle">{bottom.name}</h6>
                            </div>
                    </Col>
                    <Col>
                            <img className="outfitImage" src={shoe.img_url} alt={shoe.name} />
                            <div className="card-body">
                                <h6 className="cardTitle">{shoe.name}</h6>
                            </div>
                    </Col>
                </Row> 
                <Container>
                    <button id="outfitLikes">{likes} <span role="img"> ❤️</span></button>
                    <p id="outfitDesigner"><em>Outfit Created By: {user.name}</em></p>
                    <br></br>
                </Container>

            </Container>
        )
    }
}

export default OutfitCard; 