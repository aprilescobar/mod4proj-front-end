import React from 'react';
import ProductCard from '../Components/ProductCard';

class Bottoms extends React.Component{
    state = {
        bottoms: [],
        bottomsClicked: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(bottoms => this.setState({bottoms}))    
        localStorage.bottomsClicked && this.setState({bottomsClicked: localStorage.bottomsClicked})
    }

    renderBottoms = () => {
        const bottoms = [...this.state.bottoms]
        return bottoms.map(bottom => {
            if (this.state.bottomsClicked.includes(bottom.id.toString())){
                return <div className="responsive"><ProductCard key={bottom.id} product={bottom} getProduct={this.props.getProduct} category="bottoms" changeButton={this.changeButton} clicked={true}/></div>
            } 
            return <div className="responsive"><ProductCard key={bottom.id} product={bottom} getProduct={this.props.getProduct} category="bottoms" changeButton={this.changeButton}/></div>
        })
    }

    changeButton = id => {
        this.setState({ bottomsClicked: this.state.bottomsClicked + id.toString()}, () => localStorage.bottomsClicked = this.state.bottomsClicked)
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