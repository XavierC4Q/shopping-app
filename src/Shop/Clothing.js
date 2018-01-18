import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import API from './APIs'

class Clothing extends React.Component{
  constructor(){
    super()
    this.state={
      cart:[],
      shirts:[],
      shoes:[],
      jeans:[],
    }
  }


  fetchJeans = () =>{
    let jeansObjects = []
    let allJeans = API.getJeans().then(response =>{
      let jeanProducts = response.data.products
      jeanProducts.map(jeans =>{
        let entry = {
          name:jeans.name,
          id:jeans.id,
          price:jeans.price.current.text,
          color:jeans.colour,
          image:jeans.baseImageUrl,
          brand:jeans.brandName
        }
        jeansObjects.push(entry)
      })
    })
    this.setState({
      jeans:jeansObjects
    })
  }

  fetchShoes = () =>{
    let shoesObjects = []
    let allShoes = API.getShoes().then(response =>{
      let shoeProducts = response.data.products
      shoeProducts.map(shoes =>{
        let entry = {
          name:shoes.name,
          id:shoes.id,
          price:shoes.price.current.text,
          color:shoes.colour,
          image:shoes.baseImageUrl,
          brand:shoes.brandName
        }
        shoesObjects.push(entry)
      })
    })
    this.setState({
      shoes:shoesObjects
    })
  }

  fetchShirts = () =>{
    let shirtsObjects = []
    let allShirts = API.getShirts().then(response =>{
      let shirtProducts = response.data.products
      shirtProducts.map(shirt =>{
        let entry = {
          name:shirt.name,
          id:shirt.id,
          price:shirt.price.current.text,
          color:shirt.colour,
          image:shirt.baseImageUrl,
          brand:shirt.brandName
        }
        shirtsObjects.push(entry)
      })
    })
    this.setState({
      shirts:shirtsObjects
    })
  }

  componentDidMount(){
    this.fetchJeans()
    this.fetchShoes()
    this.fetchShirts()
  }

  render(){
    return(
      <div>
        <h1>Clothing</h1>
        <div>
          <Switch>
            <Route exact path="/shop/clothing" component={ClothingHome}/>
            <Route exact path="/shop/clothing/shirts" component={Shirts}/>
            <Route exact path="/shop/clothing/shoes" component={Shoes}/>
            <Route exact path="/shop/clothing/jeans" component={Jeans}/>
            <Route path="/shop/clothing/:id" component={IndivItem}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Clothing
