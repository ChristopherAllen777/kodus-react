import React, { Component } from 'react';


export default class GoogleMap extends Component{

    componentDidMount() {
        new google.maps.Map(
            this.map,
            {
                zoom: 12,
                center: {
                    // lat: this.props.lat,
                    // lng: this.props.lon
                    lat: 30.2747,
                    lng: -97.740556
            }
        });
    }

    render() {
        return (
            <div>
                <div className="map" ref={(element) => { this.map = element; }} />
                ?!?!?!?!?
            </div>
        );
    }
}
