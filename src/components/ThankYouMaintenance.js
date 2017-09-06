import React, { Component } from 'react';

export default class ThankYouMaintenance extends Component {
    render () {
        return (
            <div>
                <div className="header">
                    <h1>Thank You For Submitting Your Maintenance Request with Kodus!</h1>
                    <div id="comment">
	                Thank you for submitting! A maintenance technician will be getting in touch with you very soon!
                    <br/>
                    <a href="/">Back To Home Page</a>
                    </div>
                </div>
            </div>
        );
    }
}