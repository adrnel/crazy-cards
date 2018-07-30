import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import CustomerDetailsForm from './components/CustomerDetailsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerDetailsForm/>
      </div>
    );
  }
}

export default App;
