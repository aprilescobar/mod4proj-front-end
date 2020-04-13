import React from 'react';
import './App.css';
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
import Fashion from './Containers/Fashion'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/outfits" component={Outfits} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/tops" component={Tops} />
          <Route exact path="/bottoms" component={Bottoms} />
          <Route exact path="/shoes" component={Shoes} />
          <Route exact path="/outfits/new" component={CreateOutfit} />
          <Fashion />
        </div>
      </Router>
    );
  }
}

// default export syntax
export default App;



