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
            return <div className="responsive"><ProductCard key={shoe.id} product={shoe} getProduct={this.props.getProduct} category="shoes" /></div>
        })
    }

    render () {
        return (    
            <div>
                <h3>- Shoes -</h3>
                {this.renderShoes()}
            </div>
        )    
    }
}

export default Shoes