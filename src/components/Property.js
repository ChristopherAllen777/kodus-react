import React, { Component } from 'react';

import ImageSlider from './miscellaneous/ImageSlider';
import PropertyShortDescription from './property/PropertyShortDescription';


let IMAGES_LIST_1 = [
    "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664569_10159233973105397_8131932104020616398_n.jpg?oh=b671a890a2c355b0dbc3bda988d1b3f4&oe=59EF537A",
    "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20770288_10159233963145397_3756501036429277570_n.jpg?oh=fd21373ed48be921bdcdcaee4126ce22&oe=59EFD2ED",
    "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664813_10159233963140397_3185855072053004134_n.jpg?oh=2a1bf89f63c021034725141f8b4407f1&oe=5A32E164",
    "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?oh=2b1552be59db3a904e8c4a2ab85822c1&oe=5A28ABBE",
    "https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/20689907_10159233963255397_6662457968072453830_o.jpg?oh=a930616fedb1230cbb4bb0cc367987ff&oe=59F00437",
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
