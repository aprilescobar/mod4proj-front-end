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
        const clicked = this.clickedBottoms()
        const bottoms = [...this.state.bottoms]
        return bottoms.map(bottom => {
            if (clicked.includes(bottom.id)){
                return (
                    <div className="responsive">
                        <ProductCard 
                            key={bottom.id} 
                            product={bottom} 
                            getProduct={this.props.getProduct} 
                            category="bottoms" 
                            clicked={true}
                        />
                    </div>
                )
            }
            return (
                <div className="responsive">
                    <ProductCard 
                        key={bottom.id} 
                        product={bottom} 
                        getProduct={this.props.getProduct} 
                        category="bottoms" 
                    />
                </div>
            )
        })
    }

    clickedBottoms = () => {
        return this.props.bottoms.map(clicked => clicked.product_id)
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