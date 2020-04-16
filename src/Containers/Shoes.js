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
        const clicked = this.clickedShoes()
        const shoes = [...this.state.shoes]
        return shoes.map(shoe => {
            if (clicked.includes(shoe.id)){
                return (
                    <div className="responsive">
                        <ProductCard 
                            key={shoe.id} 
                            product={shoe} 
                            getProduct={this.props.getProduct} 
                            category="shoes" 
                            clicked={true}
                        />
                    </div>
                )
            }
            return (
                <div className="responsive">
                    <ProductCard 
                        key={shoe.id} 
                        product={shoe} 
                        getProduct={this.props.getProduct} 
                        category="shoes" 
                    />
                </div>
            )
        })
    }

    clickedShoes = () => {
        return this.props.shoes.map(clicked => clicked.product_id)
    }

    render () {
        return (    
            <div>
                <h3>- Shoes -</h3>
                {this.renderShoes()}s
            </div>
        )    
    }
}

export default Shoes