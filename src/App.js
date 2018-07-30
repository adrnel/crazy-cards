import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import CustomerDetailsForm from './components/CustomerDetailsForm';
import AvailableCards from './components/AvailableCards';
import cards from './data/testCards.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AvailableCards cards={cards}/>
      </div>
    );
  }
}

export default App;
