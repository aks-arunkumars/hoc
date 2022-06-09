import React, { Component } from 'react';
import './App.css';
import HOC from './HOC';
class App extends Component{
  render() {
    return (
      <div className="App">
        <span>
          <strong>{this.props.data}</strong> from a HOC
        </span>
      </div>
    );
  }
}
export default HOC(App);