import React, { Component } from 'react';
const HOC = (AComponent) => {
  class NewComponent extends Component{
    render() {
      return (
        <AComponent data="Hello"/>
      )
    }
  }
  return NewComponent
}
export default HOC;