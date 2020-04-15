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
// import Fashion from './Containers/Fashion'

class App extends React.Component {

  state = {
    tops: [],
    bottoms: [],
    shoes: []
  }

  getProduct = (product, category) => {
    if (category === 'tops') {
      this.setState({ tops: [...this.state.tops, product]})
    } if (category === 'bottoms') {
      this.setState({ bottoms: [...this.state.bottoms, product]})
    } if (category === 'shoes') {
      this.setState({ shoes: [...this.state.shoes, product]})
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
          <Route exact path="/tops" render={() => <Tops getProduct={this.getProduct}/>} />
          <Route exact path="/bottoms" render={() => <Bottoms getProduct={this.getProduct}/>} />
          <Route exact path="/shoes" render={() => <Shoes getProduct={this.getProduct}/>} />
          <Route exact path="/outfits/new" render={() => <CreateOutfit {...this.state} />} />
        </div>
      </Router>
    );
  }
}

// default export syntax
export default App;



