import React from 'react';
import ProductCard from '../Components/ProductCard';

class Tops extends React.Component{
    state = {
        tops: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/tops')
        .then(res => res.json())
        .then(tops => this.setState({tops})) 
    }

    renderTops = () => {
        const clicked = this.clickedTops()
        const tops = [...this.state.tops]
        return tops.map(top => {
            if (clicked.includes(top.id)){
                return (
                    <div className="responsive">
                        <ProductCard 
                            key={top.id} 
                            product={top} 
                            getProduct={this.props.getProduct} 
                            category="tops" 
                            clicked={true}
                        />
                    </div>
                )
            }
            return (
                <div className="responsive">
                    <ProductCard 
                        key={top.id} 
                        product={top} 
                        getProduct={this.props.getProduct} 
                        category="tops" 
                    />
                </div>
            )
        })
    }

    clickedTops = () => {
        return this.props.tops.map(clicked => clicked.product_id)
    }

    render () {
        console.log(this.clickedTops())
        return (    
            <div>
                <h3>- Tops -</h3>
                {this.renderTops()}
            </div>
        )    
    }
}

export default Tops