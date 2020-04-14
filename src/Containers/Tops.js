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
        let tops = [...this.state.tops]
        return tops.map(top => {
            return <div class="responsive"><ProductCard key={top.id} product={top} /></div>
        })
    }

    render () {
        return (    
            <div>
                <h3>Tops!</h3>
                {this.renderTops()}
            </div>
        )    
    }
}

export default Tops