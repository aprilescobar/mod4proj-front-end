import React from 'react';
import ProductCard from '../Components/ProductCard';

class Bottoms extends React.Component {

    state = {
        bottoms: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(bottoms => this.setState({
            bottoms: bottoms
        }))
    }

    renderBottoms = () => {
        let bottoms = [...this.state.bottoms]
        return bottoms.map( bottom => {
            return <ProductCard bottom={bottom} />
        })
    }
 
    render() {
        console.log('inside renderBottoms', this.state.bottoms)
        // console.log(this.state)
        return (    
            <div>
                <h1>Bottoms!</h1>
                {this.renderBottoms()}
            </div>
        )
    }
}

export default Bottoms