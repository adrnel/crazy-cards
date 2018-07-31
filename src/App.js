import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import CustomerDetailsForm from './components/CustomerDetailsForm';
import AvailableCards from './components/AvailableCards';
import { getCards } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      cards: {}
    };
    this.proceed = this.proceed.bind(this);
    this.back = this.back.bind(this);
  }

  proceed() {
    // get request would actually look something like: axios.get(`https://crazycards.com/cards/${userid}`)
    getCards()
      .then(res => {
        this.setState({cards: res.data.cards, showResults: true},() => {console.log('this.state', this.state)});
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
        {!this.state.showResults && <CustomerDetailsForm proceed={this.proceed}/>}
        {this.state.showResults && <AvailableCards cards={this.state.cards} back={this.back}/>}
      </div>
    );
  }
}

export default App;
