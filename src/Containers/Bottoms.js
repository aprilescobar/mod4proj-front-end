import React from 'react';
import ProductCard from '../Components/ProductCard';

class Bottoms extends React.Component{
    state = {
        bottoms: []
    }

    componentDidMount() {
    fetch('http://localhost:3000/bottoms')
    .then(res => res.json())
    .then(bottoms => this.setState({bottoms}))
    }

    renderBottoms = () => {
        let bottoms = [...this.state.bottoms]
        return bottoms.map(bottom => {
            return <div class="responsive"><ProductCard key={bottom.id} product={bottom} getId={this.getId}/></div>
        })
    }

    getId = id => {
        console.log("Inside Bottoms, getID", id)
    }

    render () {
        return (    
            <div>
                <h3>- Bottoms -</h3>
                {this.renderBottoms()}
            </div>
        )    
    }
}

export default Bottoms