import React, { Component } from 'react';
import axios from "axios";

import MyComponent from "./utils/MyComponent";
import InputBox from "./forms/InputBox";

let INPUT_FIELD_DATA = [
	{slug: 'prop_type', text: "Property Type"},
	{slug: 'prop_active', text: "Active?"},
	{slug: 'situs_prefix', text: "Prefix"},
	{slug: 'situs_num', text: "Street Number"},
	{slug: 'situs_street', text: "Street Name"},
	{slug: 'situs_suffix', text: "Suffix"},
	{slug: 'situs_city', text: "City"},
	{slug: 'situs_state', text: "State"},
	{slug: 'situs_zip', text: "Zipcode"},
];

function pluckInputFields(fields, this_value) {
	let data = {};
	for (let field of fields) {
		data[field] = this_value[field].value;
	}
	return data;
}


export default class Property_form extends MyComponent {

	constructor(props) {
		let custom_methods = [
			'submitForm',
		];
		super(props, custom_methods);
		this.state = {};
	}

	submitForm() {
		// alert(this.firstName.value);
		// alert(this.middleName.value);
		// alert(this.lastName.value);

		let fields = INPUT_FIELD_DATA.map(function(dataset) {
			return dataset.slug;
		});

		let post_body = pluckInputFields(fields, this);
		axios.post("/landlords", post_body)
		  .then(function(response) {
			console.log(`Yay, ${response}`);
		  })
		  .catch(function(error) {
			console.log(`Awww snap, ${error}`);
		  })
	}

    render () {
		let self = this;
		let inputBoxes = INPUT_FIELD_DATA.map(function(dataset) {
			return (
				<InputBox slug={dataset.slug} text={dataset.text} this_value={self} />
			)
		});

        return (
        <div>
        <div className ="maincontainer">

			<form id="applicationInformation form-horizontal" method="post">

			{/* <!-- ==== Landlord Information ===  --> */}
				<h2> Property Form </h2>
				
				<div className = "landlordInfo well">

					{inputBoxes}
					
					<div className = "form-group">
						<button onClick={() => {this.submitForm()}} type="submit" className="button button1">
  						<span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span> Submit
						</button>
					</div>
				</div>         
            </form>
        </div>
        </div>
        );
    }
}