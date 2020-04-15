import React from 'react';
import ProductCard from '../Components/ProductCard';

class Tops extends React.Component{
    state = {
        tops: [],
        topsClicked: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/tops')
        .then(res => res.json())
        .then(tops => this.setState({tops}))    
        localStorage.topsClicked && this.setState({topsClicked: localStorage.topsClicked})
    }

    renderTops = () => {
        const tops = [...this.state.tops]
        return tops.map(top => {
            if (this.state.topsClicked.includes(top.id.toString())){
                return <div className="responsive"><ProductCard key={top.id} product={top} getProduct={this.props.getProduct} category="tops" changeButton={this.changeButton} clicked={true}/></div>
            } 
            return <div className="responsive"><ProductCard key={top.id} product={top} getProduct={this.props.getProduct} category="tops" changeButton={this.changeButton}/></div>
        })
    }

    changeButton = id => {
        this.setState({ topsClicked: this.state.topsClicked + id.toString()}, () => localStorage.topsClicked = this.state.topsClicked)
    }

    render () {
        return (    
            <div>
                <h3>- Tops -</h3>
                {this.renderTops()}
            </div>
        )    
    }
}

export default Tops