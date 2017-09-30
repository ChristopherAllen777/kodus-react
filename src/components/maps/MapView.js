import React, { Component } from 'react';
import { browserHistory } from 'react-router';


export default class MapView extends Component {

    constructor(props){
        super(props);
        this.renderMap = this.renderMap.bind(this);
        this.addMarkerToMap = this.addMarkerToMap.bind(this);
        // this.clickMarker = this.clickMarker.bind(this);
    }

    componentDidMount() {
        this.renderMap();
    }

    renderMap() {
        let map_data = {
            zoom: this.props.zoom || 10,
            center: this.props.center || {lat: 30.3, lng: -97.75}  // default to Austin
        };

        let this_map = new google.maps.Map(this.refs.map, map_data);

        let markers_data = this.props.markers_data || [];
        markers_data.map(function(data) {
            this.addMarkerToMap(data, this_map);
        }.bind(this));
    }

    addMarkerToMap(data, the_map) {
        let marker = new google.maps.Marker({
            position: data.coordinates,
            map: the_map
        });
        if (data.callback) {
            let params = data.params || [undefined];
            marker.addListener('click', data.callback.bind(this, ...params));
        }
        return marker
    }

    // clickMarker(item_id, pathname) {
    //     // http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
    //     browserHistory.push(
    //         {
    //             pathname: pathname,
    //             query: { item_id: item_id } // https://stackoverflow.com/questions/36350644/how-can-i-pass-parameters-on-redirection-using-react-router
    //         }
    //     );
    // }

    render() {
        return (
            <div>
                <div style={ {height: 500, width: 500 } } ref="map" />
            </div>
        )
  }
}
