import React from 'react';
import './App.css';
import './styles.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Components/NavBar';
import Home from './Containers/Home';
import Login from './Containers/Login';
import SignUp from './Containers/SignUp';
import Outfits from './Containers/Outfits';
import Users from './Containers/Users';
import Shoes from './Containers/Shoes';
import Bottoms from './Containers/Bottoms';
import Tops from './Containers/Tops';
import CreateOutfit from './Containers/CreateOutfit';

class App extends React.Component {

  state = {
    tops: [],
    bottoms: [],
    shoes: []
  }

  componentDidMount(){
    this.fetchOptions()
  }

  fetchOptions = () => {
    fetch('http://localhost:3000/options')
    .then(res => res.json())
    .then(options => this.renderOptions(options))
  }

  getProduct = (product, category) => {
    const user_id = 1
    const product_id = product.id
    const brand = product.brand
    const name = product.name
    const color = product.color
    const description = product.description
    const img_url = product.img_url

    fetch('http://localhost:3000/options', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify ({
        user_id,
        product_id,
        brand,
        name,
        color,
        description,
        img_url,
        category
      })
    })
    .then(res => res.json())
    .then(option => this.renderOption(option))
  }

  renderOptions = options =>{
    options.map(option => {
      this.renderOption(option)
    })
  }

  renderOption = option => {
    if (option.category === "tops"){
      this.setState({tops: [...this.state.tops, option]})
    } if (option.category === "bottoms"){
      this.setState({bottoms: [...this.state.bottoms, option]})
    } if (option.category === "shoes"){
      this.setState({shoes: [...this.state.shoes, option]})
    }
  }

  handleRemove = e => {
    const category = e.target.name
    const product_id = e.target.id
    const id = parseInt(e.target.value, 0)
    fetch(`http://localhost:3000/options/${id}`, {
      method: "DELETE"
    })
    this.updateList(product_id, category)
  }

  updateList = (product_id, category) => {
    const id = parseInt(product_id, 0)
    if (category === "tops"){
      const updatedTops = this.state.tops.filter(top => top.product_id !== id)
      this.setState({tops: updatedTops})
    } if (category === "bottoms"){
      const updatedBottoms = this.state.bottoms.filter(bottom => bottom.product_id !== id)
      this.setState({bottoms: updatedBottoms})
    } if (category === "shoes"){
      const updatedShoes = this.state.shoes.filter(shoe => shoe.product_id !== id)
      this.setState({shoes: updatedShoes})
    }
  }

  render() {
    // console.log("App.js - state:", this.state)
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/outfits" component={Outfits} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/tops" render={() => <Tops getProduct={this.getProduct} tops={this.state.tops}/>} />
          <Route exact path="/bottoms" render={() => <Bottoms getProduct={this.getProduct} bottoms={this.state.bottoms}/>} />
          <Route exact path="/shoes" render={() => <Shoes getProduct={this.getProduct} shoes={this.state.shoes}/>} />
          <Route exact path="/outfits/new" render={() => <CreateOutfit {...this.state} handleRemove={this.handleRemove}/>}/>
        </div>
      </Router>
    );
  }
}

// default export syntax
export default App;



