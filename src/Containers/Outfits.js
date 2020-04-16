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

    // // adds new comment to a specific outfit if the outfit ids match
    // handleNewComment = (newComment) => {
    //     let displayOutfits = this.state.outfits.map(outfit => {
    //         if (outfit.id === newComment.outfitId) {
    //             let newTargetOutfit = { ...outfit }
    //             newTargetOutfit.comments = [...newTargetOutfit.comments, newComment]
    //             return newTargetOutfit
    //         } else {
    //             return outfit
    //         }
    //     })
    //     this.setState({
    //         outfits: displayOutfits
    //     })
    // }

    renderOutfits = () => {
        return this.state.outfits.map(outfit => 
            <OutfitCard key={outfit.id} outfit={outfit} />)
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