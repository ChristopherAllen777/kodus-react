import React, { Component } from "react";
import { browserHistory } from 'react-router';

import MapView from './maps/MapView';
import ProfileViewRestaurantBasic from './ProfileViewRestaurantBasic';


export default class MapShowRestaurants extends Component {

    constructor(props){
        super(props);
        this.clickMarkerCustomers = this.clickMarkerCustomers.bind(this);
        this.state = {restaurantID: null}
    }

    clickMarkerCustomers(item_id) {
        this.setState({ restaurantID: item_id});
    }

    render() {
        let titleText = "Property Search Locations";
        let description = ""
        let markersData = [
            {callback: this.clickMarkerCustomers, params: [2], coordinates: {lat: 30.24, lng: -97.45}},
            {callback: this.clickMarkerCustomers, params: [5], coordinates: {lat: 30.255, lng: -97.63}},
            {callback: this.clickMarkerCustomers, params: [7], coordinates: {lat: 30.25415, lng: -97.59}}
        ];

        {/* look at the center prop for how to pass props...in GoogleMap component it defaults to Austin  */}
        return (
            <div>
                <h3>{titleText}</h3>
                <p>{description}</p>
                <ProfileViewRestaurantBasic restaurantID={this.state.restaurantID} />
                <MapView markers_data={markersData} title={titleText} description={description}/>

            </div>
        );
    }
}
