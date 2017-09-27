import React, { Component } from 'react';


var RESTAURANT_PROFILES = [
    {id: 2, name: 'Las Trancas', food_style: 'Mexican'},
    {id: 5, name: 'Madam Maams', food_style: 'Vietnamese/Thai'},
    {id: 7, name: 'Short Stop', food_style: 'American'},
]

export default class ProfileViewRestaurantBasic extends Component {

    constructor(props) {
        super(props);
        this.getRestaurantProfileInfo = this.getRestaurantProfileInfo.bind(this);
        this.state = {profile: null}
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        let result = this.getRestaurantProfileInfo(nextProps.restaurantID);
        console.log("Restaurant profile:");
        console.log(result);
        this.setState({
            profile: result
        });
        console.log("this.state.profile")
        console.log(this.state.profile);
    }

    getRestaurantProfileInfo(restaurantID) {
        for (let dataset of RESTAURANT_PROFILES) {
            if (dataset.id == restaurantID) {
                return dataset;
            }
        }
        return null;
    }

    render() {
        if (!this.state.profile) {
            return null;
        } else {
            return (
                <div>
                    <h5>{this.state.profile.name}</h5>
                    <p>{this.state.profile.food_style}</p>
                </div>
            );
        }
    }
}
