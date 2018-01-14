import React, { Component } from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';
import geolib from 'geolib';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

export default class OrderableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationlatlon: [],
      restaurants: []
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.getdistance(position.coords);
    });
  }

  getdistance(coords) {
    geocodeByAddress(this.props.restaurant.address.street)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        var distance = geolib.getDistance({ latitude: latLng.lat, longitude: latLng.lng }, { latitude: coords.latitude, longitude: coords.longitude })
        this.setState({ distance })
      })
      .catch(error => console.error('Error', error))
  }
  renderRestaurants() {
    const { restaurant } = this.props;
    const { distance } = this.state
    return (
      <div className="food-item-card">
        <div className="food-image">
          <div className="food-distance"><p>{distance ? distance + " m" : "Calculating"}</p></div>
          <div className="food-stars" >
            <ReactStars
              count={5}
              value={restaurant.stars}
              edit={false}
              half={true}
              // onChange={ratingChanged}
              size={24}
              color2={'#ffd700'} />
          </div>
          <div className="food-review">
            <p>{restaurant.reviews} reviews</p>
          </div>
          <img src={restaurant.foodimageurl} alt="" />
        </div>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
        <div className="inline-col price">
          <p>${restaurant.price}</p>
        </div>
        <div className="inline-col order-btn">
          <a className="btn" >Order Now</a>
        </div>
        <div className="inline-col store-logo">
          <div className="store-logo-image">
            <img src={restaurant.logoUrl} alt="" />
          </div>
          <div className="store-info">
            <p>{restaurant.address.restaurantname} </p>
            <p>{restaurant.address.street},{restaurant.address.city},{restaurant.address.prov}</p>
          </div>
        </div>
        <div className="inline-col number-fun">
          <p><MdFavoriteOutline />{restaurant.address.likes}</p>
        </div>
      </div>
    )
  }
  render() {

    return this.renderRestaurants()
  }
}