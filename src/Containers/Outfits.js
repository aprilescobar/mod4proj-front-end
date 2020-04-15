import React from 'react';
import OutfitCard from '../Components/OutfitCard';

class Outfits extends React.Component {
    state = {
        outfits: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/outfits')
            .then(resp => resp.json())
            .then(data => this.setState({
            outfits: data
        }))
    }

    // adds new comment to a specific outfit if the outfit ids match
    handleNewComment = (newComment) => {
        let displayOutfits = this.state.outfits.map(outfit => {
            if (outfit.id === newComment.outfitId) {
                let newTargetOutfit = { ...outfit }
                newTargetOutfit.comments = [...newTargetOutfit.comments, newComment]
            } else {
                return outfit
            }
        })
        this.setState({
            outfits: displayOutfits
        })
    }

    // pass OutfitCard the handleNewComment function as a props so OutfitCard can then 
    // communicate any new comments data to its parent (OutfitsContainer) 
    renderOutfits = () => {
        return this.state.outfits.map(outfit => 
            <OutfitCard key={outfit.id} outfit={outfit} handleNewComment={this.handleNewComment} />)
    }

    render() {
        return (
            <div className="wrapper">
                <h3>Browse All Outfits!</h3>
                {this.renderOutfits()}
            </div>
        )
    }
}

export default Outfits; 