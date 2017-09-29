import React, { Component } from 'react';

export default class DetailListing extends Component {
    render () {
        return (
            <div>
            <div className="header">
            <h1>Details</h1>
            
            <div id="comment">
            
            </div>
            </div>
            
            <div style= { { backgroundColor: 'white' } } id="details-bin" className="row">
            
                <div style= { { padding: '15px', paddingLeft: '30px' } } className="col-md-6">
                    <a href="/apply"><button type="button" className="button button1">
                          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Apply Now
                    </button></a>
                    <h4> Telephone </h4>
                    <p> (767)-342-3543</p>
            
                    <h4> Address </h4>
                    <p> 2215 Town Lake Circle Apt. 142</p>
                    <p> Austin, TX 78741</p>
            
                    <h4> Rent </h4>
                    <p>$2,700.00</p> 
            
                    <h4> Size </h4>
                    <p> 2141 SqFt </p>
                    <hr/>
                    <h4> Property Type </h4>
                    <p> House with garage </p>
            
                    <h4> Beds: 4  |  Bath: 4 </h4>
                    <hr/>
                    <h4> Deposit </h4>
                    <p> $1,500.00 </p>
                       
                </div>
            
                <div style= { {padding: '15px' } } id="rental-details" className="col-md-6">
                    <img style= { { display: 'block', margin: 'auto', width: '80%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                     } } src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20663658_10159233876730397_5345901697927317524_n.jpg?oh=178c84ad75c800db48b9f25e7d7dcc26&oe=5A363AD1" />
                    <h3> Rental Notes </h3>
                    <blockquote>"Beautiful home tucked away in West Austin. 4 bedrooms 4 baths. There is a 2 car garage with a pool and plenty of lawn space.
                        Up for rent by owner. Full Kitchen space, washer plus dryer, wash room, and master bedroom."</blockquote> 
                </div>           
            </div>
            </div>
        );
    }
}