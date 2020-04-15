import React from 'react';
import ProductCard from '../Components/ProductCard';

class Tops extends React.Component{
    state = {
        tops: [],
        updatedTops: ""
    }

    componentDidMount() {
    console.log(localStorage)
    fetch('http://localhost:3000/tops')
    .then(res => res.json())
    .then(tops => this.setState({tops}))    
    if (localStorage.updatedTops) {this.setState({updatedTops: localStorage.updatedTops})}
    }

    renderTops = () => {
        const tops = [...this.state.tops]
        return tops.map(top => {
            if (this.state.updatedTops.includes(top.id.toString())){
                return <div className="responsive"><ProductCard key={top.id} product={top} getProduct={this.props.getProduct} category="tops" changeButton={this.changeButton} clicked={true}/></div>
            } 
            return <div className="responsive"><ProductCard key={top.id} product={top} getProduct={this.props.getProduct} category="tops" changeButton={this.changeButton}/></div>
        })
    }

    changeButton = id => {
        this.setState({ updatedTops: this.state.updatedTops + id.toString()}, () => localStorage.updatedTops = this.state.updatedTops)
        console.log(this.state.updatedTops)
    }

    render () {
        console.log(this.state.updatedTops)
        return (    
            <div>
                <h3>- Tops -</h3>
                {this.renderTops()}
            </div>
        )    
    }
}

export default Tops