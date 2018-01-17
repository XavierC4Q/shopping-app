import React, { Component } from 'react'
import { Route, Switch}  from 'react-router-dom'

import Clothing from './Clothing'
import Food from './Food'

class Shop extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path="/shop/clothing" component={Clothing} />
          <Route path="/shop/food" component={Food} />
        </Switch>
      </div>
    )
  }
}

export default Shop
