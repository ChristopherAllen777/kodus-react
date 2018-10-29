import React, { Component } from 'react';

import ImageSlider from './miscellaneous/ImageSlider';
import PropertyShortDescription from './property/PropertyShortDescription';


let IMAGES_LIST_1 = [
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/20663658_10159233876730397_5345901697927317524_n.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-2.xx&oh=b7273341a1dffc7d17b69eae42e137fb&oe=5C877DD1",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/20770288_10159233963145397_3756501036429277570_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=874cfeb20c9ad683e6ea7e1e97e1fc47&oe=5C4115ED",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/20664813_10159233963140397_3185855072053004134_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=68260b277ea9b796e74fbf42959964dc&oe=5C842464",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-2.xx&oh=2843b58ccf4397a67e9976281917c3da&oe=5C79EEBE",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-2.xx&oh=2843b58ccf4397a67e9976281917c3da&oe=5C79EEBE",
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
