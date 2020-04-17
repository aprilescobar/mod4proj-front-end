import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import CommentForm from './CommentForm';

class OutfitCard extends React.Component {
    state = {
        likes: this.props.outfit.likes, 
        displayCommentForm: false, 
        comments: this.props.outfit.comments, 
        displayComments: false
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

    toggleDisplayComments = () => {
        this.setState({
            displayComments: !this.state.displayComments
        })
    }

    handleNewComment = (newComment) => {
        this.setState({
           comments: [...this.state.comments, newComment]
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
                {this.state.displayComments &&
                    (<div id="commentList">
                        <ListGroup variant="flush">
                            {this.state.comments && this.state.comments.map(comment =>
                                <ListGroup.Item variant="light" key={comment.id}>
                                    {user.username}: <em>{comment.text}</em>
                                    {/* currently rendering name of user who designed outfit; need it to render name of user who left the comment */}
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </div>)}
                
                    <div className="likeButtonDiv">
                        <button id={this.props.outfit.id} onClick={this.increaseLikes}>{this.state.likes} <span role="img"> ❤️</span></button>
                        <button onClick={this.toggleDisplayComments}>{this.state.displayComments ? "Hide Comments" : "Display Comments"}</button>
                        <button onClick={this.toggleDisplayCommentForm}>{this.state.displayCommentForm ? "Hide Comment Form" : "Add a Comment"}</button>
                    </div>
                    
                    <div id="commentForm">
                    {this.state.displayCommentForm && <CommentForm outfitId={outfit.id} comments={this.state.comments} handleNewComment={this.handleNewComment} />}
                        </Col>
                    <p id="outfitDesigner"><em>Outfit Created By: {user.username}</em></p>
                    <br></br>
            </Container>
        )
    }
}

export default OutfitCard; 