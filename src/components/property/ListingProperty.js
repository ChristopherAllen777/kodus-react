import React from 'react';

import MyComponent from '../utils/MyComponent';
import ImageSlider from '../miscellaneous/ImageSlider';


export default class ListingProperty extends MyComponent {

    constructor(props) {
        let custom_methods = [];
        super(props, custom_methods);
        this.state = {
            image_index: 0
        };
    }

    render() {
        return (
            <div style= { { backgroundColor: 'white', padding: '10px' } } id="listing-bin" className="row">
                <div style= { { paddingTop: '15px' } } id="listing" className="col-md-4">
                    <ImageSlider images={this.props.images} />
                </div>
                <br/>

                <div className="col-md-4">
                    <h4 style= { {  fontWeight: 'bold' } }>Address</h4>
                    <p>{this.props.property_object.address_1}</p>
                    <p>{this.props.property_object.address_2}</p>
                    <span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-glass" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                    <hr/>
                    <span> Renter : Jim Brown </span>
                </div>

                    <div className="col-md-4">
                    <h4 style= { { fontWeight: 'bold' } }>Price: {this.props.property_object.price_range}</h4>
                    <p> USD / Month </p>
                    <h4>Beds: {this.props.property_object.bedrooms} |  Bath: {this.props.property_object.bathrooms}</h4>

                    <a href="/users/details"><button type="button" className="button button1">
                          <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Edit Property
                    </button></a>
                </div>
            </div>
        )
    }
}
