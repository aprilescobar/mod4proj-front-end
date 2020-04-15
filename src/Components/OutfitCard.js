import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


class OutfitCard extends React.Component {
    state = {
        likes: this.props.outfit.likes, 
        displayCommentForm: false, 
        comments: []
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

    displayCommentForm = () => (
        <form id={this.props.outfit.id}>
            <div>
                <input type="text" name="comment" placeholder="Comment here" />
            </div>
            <input type="submit" value="Post Comment" onSubmit={this.submitComment}/>
        </form>
    )

    submitComment = (event) => {
        event.preventDefault()

        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ ...this.state.comments, outfit_id: this.props.outfit.id })
        })
            .then(res => res.json())
            .then(newReview => {
                this.props.handleNewReview(newReview)
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
                    <div className="likeButtonDiv">
                        <button id={this.props.outfit.id} onClick={this.increaseLikes}>{this.state.likes} <span role="img"> ❤️</span></button>
                        <button onClick={this.toggleDisplayCommentForm}>Add a Comment</button>
                    </div>
                    <div id="commentForm">
                        {this.state.displayCommentForm && this.displayCommentForm()}
                    </div>
                    <p id="outfitDesigner"><em>Outfit Created By: {user.name}</em></p>
                    <br></br>
            </Container>
        )
    }
}

export default OutfitCard; 