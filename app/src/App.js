import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator/Calculator';

class App extends Component {
  constructor(){
      super();
      header: 'Calculator';
      updateHeader: this.setState(val=>this.header:val);
  }
  render() {
    return (
        <div>
      <Calculator />
        </div>
    );
  }
}

export default App;
