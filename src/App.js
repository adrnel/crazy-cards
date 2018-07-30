import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import CustomerDetailsForm from './components/CustomerDetailsForm';
import AvailableCards from './components/AvailableCards';
import cards from './data/testCards.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
    };
    this.proceed = this.proceed.bind(this);
    this.back = this.back.bind(this);
  }

  proceed() {
    this.setState(() => {
      return {showResults: true}
    })
  }

  back() {
    this.setState(() => {
      return {showResults: false}
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.showResults && <CustomerDetailsForm cards={cards} proceed={this.proceed}/>}
        {this.state.showResults && <AvailableCards cards={cards} back={this.back}/>}
      </div>
    );
  }
}

export default App;
