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
      cards: {},
      userInformation: {},
    };
    this.proceed = this.proceed.bind(this);
    this.back = this.back.bind(this);
    this.setUserInformation = this.setUserInformation.bind(this);
  }

  proceed() {
    // get request would actually look something like: axios.get(`https://crazycards.com/cards/${userid}`)
    getCards()
      .then(res => {
        this.setState({cards: res.data.cards, showResults: true});
      })
  }

  back() {
    this.setState(() => {
      return {showResults: false}
    })
  }

  setUserInformation(userInformation) {
    this.setState(() => {
      return {userInformation: userInformation}
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.showResults && <CustomerDetailsForm proceed={this.proceed} setUserInformation={this.setUserInformation}/>}
        {this.state.showResults && <AvailableCards cards={this.state.cards} back={this.back} userInformation={this.state.userInformation}/>}
      </div>
    );
  }
}

export default App;
