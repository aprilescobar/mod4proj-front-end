import React from 'react';
import ProductCard from '../Components/ProductCard';

class Shoes extends React.Component{
    state = {
        shoes: []
    }

    componentDidMount() {
    fetch('http://localhost:3000/shoes')
    .then(res => res.json())
    .then(shoes => this.setState({shoes}))
    }

    renderShoes = () => {
        let shoes = [...this.state.shoes]
        return shoes.map(shoe => {
            return <div class="responsive"><ProductCard key={shoe.id} product={shoe} /></div>
        })
    }

    render () {
        return (    
            <div>
                <h3>shoes!</h3>
                {this.renderShoes()}
            </div>
        )    
    }
}

export default Shoes