import React, { Component } from 'react';


var RESTAURANT_PROFILES = [
    {id: 2, address: "123 Austin Dr.", rooms: '4 bed/3 bath'},
    {id: 5, address: '345 Texas Blvd', rooms: '5 bed/4 bath'},
    {id: 7, address: '456 Kodus St', rooms: '2 bed/1 bath'},
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
                    <h5>{this.state.profile.address}</h5>
                    <p>{this.state.profile.rooms}</p>
                </div>
            );
        }
    }
}
