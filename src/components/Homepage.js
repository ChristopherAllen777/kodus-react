import React, { Component } from 'react';

import ContentBlock from './ContentBlock';
import ImageCarousel from './miscellaneous/ImageCarousel';
import SContentImage from './images/SContentImage';


let MANAGER_TENANT_HEADER = (<span>Property Managers And <br/> Tenants Unite</span>);
let MANAGER_TENANT_TEXT = "Bringing both the tenant and manager relationship closer makes things quicker and easier. Kodus can be used at a grass roots level for individual property managers all the way to leasing agencies."

let RENTAL_SEARCH_HEADER = "Rental Search Made Easy";
let RENTAL_SEARCH_TEXT = "For users looking for quick search and close manangment of their rental Kodus is the solution. Now you can just log into Kodus and make quick easy maintence requests straight to your property manager."

const CAROUSEL_IMAGES = [
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/20776637_10159232079495397_1866555496954307768_o.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-1.xx&oh=762ab54d4c31c85276ce550502238681&oe=5C3FB297",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/20728899_10159233836880397_4666321340847713491_o.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=116f7f9eb715b8a92d696de45cb11c3d&oe=5C4724B8",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/20776656_10159233846215397_1075554196116138187_o.jpg?_nc_cat=107&_nc_ht=scontent-dfw5-1.xx&oh=a9a3cd4e9da39f18550c563c32bbc898&oe=5C86A28D",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/20690153_10159233862390397_5525387364445532266_o.jpg?_nc_cat=107&_nc_ht=scontent-dfw5-1.xx&oh=b3b0eafd0243ad6eab5e22259937b02b&oe=5C49E0C3",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/20776568_10159233862400397_2799772126915008308_o.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-1.xx&oh=aeb6bccc58ad1532b557dd3cfe9ca73e&oe=5C7DD001",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/20776568_10159233862400397_2799772126915008308_o.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-1.xx&oh=aeb6bccc58ad1532b557dd3cfe9ca73e&oe=5C7DD001",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/20776568_10159233862400397_2799772126915008308_o.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-1.xx&oh=aeb6bccc58ad1532b557dd3cfe9ca73e&oe=5C7DD001",
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
                <img style= { { display: 'block', margin: 'auto', width: '80%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' } } src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20767726_10159221434560397_3520340775677831607_n.jpg?oh=35493445648f706d26b33123f6a4ff03&oe=59F01C62" />
                <br/>
            </div>
        </div>

        <br/>
        <div style={ {backgroundColor: 'white', paddingTop: 20} } className="row">
            <div id="overview" className="col-sm-12">
                <div className="w3-content w3-section" style={ {maxWidth: 722} }>
                    <ImageCarousel component={SContentImage} images={CAROUSEL_IMAGES} timing={2} />
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
