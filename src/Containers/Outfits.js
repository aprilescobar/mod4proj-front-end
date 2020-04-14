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

    renderOutfits = () => {
        return this.state.outfits.map(outfit => 
            <OutfitCard key={outfit.id} outfit={outfit} />)
    }

    render() {
        return (
            <div className="wrapper">
                <h3>All Outfits</h3>
                {this.renderOutfits()}
            </div>
        )
    }
}

export default Outfits; 