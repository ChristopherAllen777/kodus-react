import React, { Component } from 'react';

import ImageSlider from './miscellaneous/ImageSlider';
import PropertyShortDescription from './property/PropertyShortDescription';


let IMAGES_LIST_1 = [
    "../../../public/assets/images/details/detail-1.jpg",
    "../../../public/assets/images/details/detail-2.jpg",
    "../../../public/assets/images/details/detail-3.jpg",
    "../../../public/assets/images/details/detail-4.jpg",
    "../../../public/assets/images/details/detail-5.jpg"

];

let PROPERTY_OBJECT_1 = {
    address_1: "2215 Town Lake Circle Apt 142",
    address_2: "Austin, TX 78741",
    phone_number: "254-324-9775",
    email: "kodus@gmail.com",
    price_range: "$1,200 - $1,500",
    bedrooms: "4",
    bathrooms: "4"
};


export default class Property extends Component {
    render() {
        return (
            <div>

                <div className="header">
                    <h2> Property Search!</h2>

                    <div id="comment">
                        Search through our list of properties. View the details to learn more about one that interests you!
                    </div>
                </div>

                <PropertyShortDescription
                    images={IMAGES_LIST_1}
                    property_object={PROPERTY_OBJECT_1}/>
                <br/>
                <PropertyShortDescription
                    images={IMAGES_LIST_1}
                    property_object={PROPERTY_OBJECT_1}/>
                <br/>
                <PropertyShortDescription
                    images={IMAGES_LIST_1}
                    property_object={PROPERTY_OBJECT_1}/>
                <br/>
                <PropertyShortDescription
                    images={IMAGES_LIST_1}
                    property_object={PROPERTY_OBJECT_1}/>
                <br/>
            </div>
        );
    }
}
