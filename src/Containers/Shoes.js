import React from 'react';
import ProductCard from '../Components/ProductCard';

class Shoes extends React.Component{
    state = {
        shoes: [],
        shoesClicked: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/shoes')
        .then(res => res.json())
        .then(shoes => this.setState({shoes}))    
        localStorage.shoesClicked && this.setState({shoesClicked: localStorage.shoesClicked})
    }

    renderShoes = () => {
        const shoes = [...this.state.shoes]
        return shoes.map(shoe => {
            if (this.state.shoesClicked.includes(shoe.id.toString())){
                return <div className="responsive"><ProductCard key={shoe.id} product={shoe} getProduct={this.props.getProduct} category="shoes" changeButton={this.changeButton} clicked={true}/></div>
            } 
            return <div className="responsive"><ProductCard key={shoe.id} product={shoe} getProduct={this.props.getProduct} category="shoes" changeButton={this.changeButton}/></div>
        })
    }

    changeButton = id => {
        this.setState({ shoesClicked: this.state.shoesClicked + id.toString()}, () => localStorage.shoesClicked = this.state.shoesClicked)
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