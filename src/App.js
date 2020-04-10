import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
      </header>
    </div>
  );
}

// default export syntax
export default App;
