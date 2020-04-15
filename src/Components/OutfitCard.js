import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import CommentForm from './CommentForm';

class OutfitCard extends React.Component {
    state = {
        likes: this.props.outfit.likes, 
        displayCommentForm: false, 
    }

    increaseLikes = () => {
        let newLikes = this.state.likes + 1

        fetch(`http://localhost:3000/outfits/${this.props.outfit.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                likes: (this.state.likes + 1)
            })
        })
            .then(resp => resp.json())
            .then(data => this.setState({
                likes: newLikes
            }))
    }

    toggleDisplayCommentForm = () => {
        this.setState({
            displayCommentForm: !this.state.displayCommentForm
        })
    }

    render() {
        const outfit = this.props.outfit
        const top = this.props.outfit.top
        const user = this.props.outfit.user
        const bottom = this.props.outfit.bottom
        const shoe = this.props.outfit.shoe

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
                <div id="commentList">
                    <ListGroup variant="flush">
                        {this.props.outfit.comments && this.props.outfit.comments.map(comment =>
                            <ListGroup.Item variant="light" key={comment.id}>
                                {user.name}: <em>{comment.text}</em>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </div>


                    <div className="likeButtonDiv">
                        <button id={this.props.outfit.id} onClick={this.increaseLikes}>{this.state.likes} <span role="img"> ❤️</span></button>
                        <button onClick={this.toggleDisplayCommentForm}>Add a Comment</button>
                    </div>
                        <Col sm={4}>
                    {this.state.displayCommentForm && <CommentForm outfitId={outfit.id} handleNewComment={this.props.handleNewComment} outfitId={outfit.id}/>}
                        </Col>
                    <p id="outfitDesigner"><em>Outfit Created By: {user.name}</em></p>
                    <br></br>
            </Container>
        )
    }
}

export default OutfitCard; 