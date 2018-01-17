import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

class Clothing extends React.Component{
  constructor(){
    super()
    this.state={
      cart:[]
    }
  }

  render(){
    return(
      <div>
        <h1>Clothing</h1>
      </div>
    )
  }
}

export default Clothing
