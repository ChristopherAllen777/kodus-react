import React, { Component } from 'react';

import ContentBlock from './ContentBlock';
import ImageCarousel from './miscellaneous/ImageCarousel';
import SContentImage from './images/SContentImage';


let MANAGER_TENANT_HEADER = (<span>Property Managers And <br/> Tenants Unite</span>);
let MANAGER_TENANT_TEXT = "Bringing both the tenant and manager relationship closer makes things quicker and easier. Kodus can be used at a grass roots level for individual property managers all the way to leasing agencies."

let RENTAL_SEARCH_HEADER = "Rental Search Made Easy";
let RENTAL_SEARCH_TEXT = "For users looking for quick search and close manangment of their rental Kodus is the solution. Now you can just log into Kodus and make quick easy maintence requests straight to your property manager."

const CAROUSEL_IMAGES = [
    "../../../public/assets/images/home/carousel-1.jpg",
    "../../../public/assets/images/home/carousel-2.jpg",
    "../../../public/assets/images/home/carousel-3.jpg",
    "../../../public/assets/images/home/carousel-4.jpg",
    "../../../public/assets/images/home/carousel-5.jpg",

]


export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {carousel_index: 0};
  }

  render() {
    return (
      <div>
        <div className="row">
            <div id="company-decribe" className="col-sm-6">
                <h1>Kodus</h1>
                <h4> Property Managment App</h4>
                <hr/>
                <h2 style= { { color: '#904bea', fontStyle: 'italic' } } > Easy. Simple. Quick.</h2>
                <h3>Software that works for property mangers & tenants</h3>
                <p> Kodus is a property managment app that is designed for propert managers and renters. It allows
                    for the search of rental properties and for tenant maintence requests. Property managers can
                    use for their personal use to manage requests and property applications. Kodus is an all in
                    one stop shop in property managment software. Enjoy!
                </p>
                <br/>
            </div>
            <div className="col-sm-6">
                <img style= { { display: 'block', margin: 'auto', width: '60%', height: '400px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' } } src="../../public/assets/images/app-kodus.png" />
                <br/>
            </div>
        </div>

        <br/>
        <div style={ {backgroundColor: 'white', paddingTop: 20} } className="row">
            <div id="overview" className="col-sm-12">
                <div className="w3-content w3-section" style={ {maxWidth: 722} }>
                    <ImageCarousel component={SContentImage} images={CAROUSEL_IMAGES} timing={3} />
                </div>
            </div>
        </div>

        <br/>
        <div style={ {backgroundColor: 'white', paddingTop: 20} } className="row">
            <div id="overview" className="col-sm-6">
                <h3 style= { {color: '#904bea', fontStyle: 'italic', textAlign: 'center'} } > How It Works . . . </h3>
                <blockquote>This app is a three tier design. Propery Search, rental application, and property manangment. Just
                    search for your desired property, view rental details, and apply for tenant status. The app is designed to be user authenticated
                    for both the tenant and manager. Use Kodus for listings and managing your posts as people look to rent.</blockquote>
            </div>
            <div className="col-sm-6">
                <h3 style= { {textAlign: 'center'} } > Details </h3>
                <hr/>
                <ul>
                    <li> User Authenticated </li>
                    <li> Search For Rentals </li>
                    <li> Browse Listing Posts </li>
                    <li> Galleries of Info of Rentals </li>
                    <li> Apply for Leases </li>
                    <li> Maintence Requests </li>
                </ul>
            </div>
        </div>
        <br/>

        <ContentBlock
            image_location="left"
            url="https://blankslatepages.s3.amazonaws.com/56ec2c02d59fc-property-management-duties.jpg"
            header={MANAGER_TENANT_HEADER}
            body_text={MANAGER_TENANT_TEXT}
        />

        <br/>

        <ContentBlock
            image_location="right"
            url="http://cafeseo.ir/wp-content/uploads/mobile-phones.jpg"
            header={RENTAL_SEARCH_HEADER}
            body_text={RENTAL_SEARCH_TEXT}
        />

      </div>
    );
  }
}
