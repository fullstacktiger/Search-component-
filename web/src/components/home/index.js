import React, { Component } from 'react'
import axios from 'axios';
import Search from '../search';
import OrderableItem from '../orderableItem';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentWillMount() {
    this.getRestaurants();
  }

  getRestaurants(filter='') {
    console.log(filter);
    axios.get('/api/list_restaurants', {params: {filter}})
      .then((response) => {
        this.setState({
          restaurants: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderRestaurants() {
    return this.state.restaurants.map((restaurant, index) => (
      <OrderableItem restaurant={restaurant} key={index} />
    ));
  }


  render() {
    console.log(this.renderRestaurants)
    return (
      <div className="main-wrap">
        <Search onSearch={this.getRestaurants.bind(this)} />
        <div className="container" >
          {this.renderRestaurants()}
        </div>

      </div>
    )
  }
}