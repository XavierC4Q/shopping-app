import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import FoodButtons from './FoodButtons'
import FoodCart from './FoodCart'

class Food extends React.Component {
  constructor() {
    super()
    this.produce =
    [
      {name:"Apple",price:2},
      {name:"Orange",price:3},
      {name:"Banana",price:2.50},
      {name:"Carrots",price:4},
      {name:"Strawberries",price:5},
      {name:"Bacon",price:5},
      {name:"Eggs",price:4},
      {name:"Milk",price:2.25},
      {name:"Water",price:3},
      {name:"Fish",price:7},
      {name:"Chicken",price:8},
      {name:"Yogurt",price:3},
      {name:"Pineapple", price:7.50},
      {name:"Cereal",price:4.50},
      {name:"Oatmeal",price:4},
      {name:"Turkey",price:9},
      {name:"Granola",price:5}
    ]
    this.state = {
      cart:[],
      total: 0
    }
  }


  addItem = e =>{
    const { cart } = this.state
    let { total } = this.state
    let itemName = e.target.name
    let itemFound = cart.find(item =>item.name === itemName)
    if(!itemFound){
      let food = this.produce.find(food =>food.name === itemName)
      let entry = {name:itemName,price:food.price,qty:1}
      this.setState({
        cart: [...cart,entry],
        total: total += entry.price
      })
    } else {
      itemFound.qty += 1
      this.setState({
        cart: [...cart],
        total: total += itemFound.price
      })
    }
  }

  removeItem = e =>{
    const { cart } = this.state
    let { total } = this.state
    let itemName = e.target.name
    let itemFound = cart.find(item => item.name === itemName)
    if(itemFound){
      if(itemFound.qty > 1){
        itemFound.qty -= 1
        this.setState({
          cart: [...cart],
          total: total -= itemFound.price
        })
      } else {
        let cartFilter = cart.filter(items => items.name !== itemFound.name)
        this.setState({
          cart: cartFilter,
          total: total -= itemFound.price
        })
      }
    } else {
      console.log("Well thats weird")
    }
  }

  clearCart = () =>{
    this.setState({
      cart: [],
      total: 0
    })
  }

  render() {
    const { cart, total } = this.state
    return (
      <div className="foodWrap">
        <h1>Food</h1>
        <div>
          <FoodButtons produce={this.produce} func={this.addItem} />
        </div>
        <div>
          <div>
            <FoodCart
            cart={cart}
            func={this.removeItem}
            total={total}
            clear={this.clearCart}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Food
