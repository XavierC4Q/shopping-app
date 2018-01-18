import axios from 'axios'


const getJeans = () => axios.get(`https://cors-anywhere.herokuapp.com/https://api.asos.com/product/search/v1/?q=shoes&store=1&lang=en-GB&sizeschema=EU&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=4138`,{headers: {'Access-Control-Allow-Origin': '*'}})

const getShoes = () => axios.get(`https://cors-anywhere.herokuapp.com/https://api.asos.com/product/search/v1/?q=shoes&store=1&lang=en-GB&sizeschema=EU&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=7931`,{headers: {'Access-Control-Allow-Origin': '*'}})

const getShirts = () => axios.get(`https://cors-anywhere.herokuapp.com/https://api.asos.com/product/search/v1/?q=shirts&store=1&lang=en-GB&sizeschema=EU&currency=USD&sort=freshness&channel=mobile-app&offset=0&limit=3973`,{headers: {'Access-Control-Allow-Origin': '*'}})

export default {
  getShirts,
  getShoes,
  getJeans
}
