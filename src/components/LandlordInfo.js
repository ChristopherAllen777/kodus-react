import React, { Component } from 'react';
import axios from "axios";

import MyComponent from "./utils/MyComponent";
import InputBox from "./forms/InputBox";

let INPUT_FIELD_DATA = [
	{slug: 'salutation', text: "Salutation"},
	{slug: 'firstName', text: "First Name"},
	{slug: 'middleName', text: "Middle Name"},
	{slug: 'lastName', text: "Last Name"},
	{slug: 'phone1', text: "Phone Number 1"},
	{slug: 'phone1Type', text: "Phone Type"},
	{slug: 'phone2', text: "Phone Number 2"},
	{slug: 'phone2Type', text: "Phone Type"},
	{slug: 'email', text: "Email"},
	{slug: 'addr1', text: "Address Line 1"},
	{slug: 'addr2', text: "Address Line 2"},
	{slug: 'addr_city', text: "City"},
	{slug: 'addr_state', text: "State"},
	{slug: 'addr_zip', text: "Zip Code"}

];

function pluckInputFields(fields, this_value) {
	let data = {};
	for (let field of fields) {
		data[field] = this_value[field].value;
	}
	return data;
}


export default class LandlordInfo extends MyComponent {

	constructor(props) {
		let custom_methods = [
			'submitForm',
		];
		super(props, custom_methods);
		this.state = {};
	}

	submitForm() {
		alert(this.firstName.value);
		alert(this.addr_zip.value);
		// alert(this.lastName.value);

		let fields = INPUT_FIELD_DATA.map(function(dataset) {
			return dataset.slug;
		});

		let post_body = pluckInputFields(fields, this);
			console.log("Before Axios");
		axios.post("/api/landlord", post_body)
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
				<h2> Landlord Information </h2>
				
				<div className = "landlordInfo well">
					{/* <div className = "form-group">
						<label className="control-label">Title </label>
						<select id="salutation" name="salutation">
							<option value=""></option>
							<option value="Mr.">Mr.</option>
							<option value="Ms.">Ms.</option>
							<option value="Mrs.">Mrs.</option>
						</select>
					</div> */}
					{/* <div className = "form-group">
						<label className="control-label">First Name  <span className='text text-error'></span> </label>
						<input id="firstName" name="firstName" type="text" className="required span5  alphanumeric"
							   ref={(element) => {this.firstName = element}} />
					</div>	
					 <div className = "form-group">		
						<label className="control-label">Middle Name </label>
						<input id="middleName" name="middleName" type="text"  className=" span5  alphanumeric"  ref={(element) => {this.middleName = element}} />
					</div> */}

					{/* <InputBox text="Middle Name" slug="middleName" this_value={this}/> */}

					{inputBoxes}


					{/* <div className = "form-group">	
						<label className="control-label">Last Name <span className='text text-error'></span> </label>
						<input id="lastName" name="lastName" type="text" className="required span5  alphanumeric" ref={(element) => {this.lastName = element}} />		
					</div>   */}
                    {/* <div className = "form-group">	
						<label className="control-label">Phone1 </label>
						<input id="phone1" name="phone1" type="text" maxLength="12" size = "12" className="required phone1 span8  nothing" placeholder="512-555-5555" />
					</div> */}
                    {/* <div className = "form-group">	
						<label className="control-label">Phone1 Type </label>
						<input id="phone1Type" name="phone1Type" type="text" maxLength="12" size = "12" className="required phone1Type span8  nothing" placeholder="input" />
					</div> */}
                    {/* <div className = "form-group">	
						<label className="control-label">Phone2 </label>
						<input id="phone2" name="phone2" type="text" maxLength="12" size = "12" className="required phone2 span8  nothing" placeholder="512-555-5555" />
					</div> */}
                    {/* <div className = "form-group">	
						<label className="control-label">Phone2 Type </label>
						<input id="phone2Type" name="phone2Type" type="text" maxLength="12" size = "12" className="required phone2Type span8  nothing" placeholder="input" />
					</div> */}
					{/* <div className = "form-group">	
						<label className="control-label">Email <span className='text text-error'></span> </label>
						<input id="email" name="email" type="text" maxLength="60" size ="40" className=" required   span8  nothing" placeholder="jane.doe@example.com" />
					</div> */}
					{/* <div className = "form-group">	
						<label className="control-label">Address Line 1 <span className='text text-error'><b>*</b></span> </label>
						<input id="Addr1" name="Addr1" type="text" maxLength="50" size="40" className=" required  span8  nothing" />
					</div> */}
					{/* <div className = "form-group">	
						<label className="control-label">Address Line 2 <span className='text text-error'><b>*</b></span> </label>
						<input id="Addr2" name="Addr2" type="text" maxLength="50" size="40" className=" required  span8  nothing" />
					</div> */}
					{/* <div className = "form-group">	
						<label className="control-label">City <span className='text text-error'></span> </label>
						<input id="addr_city" name="addr_city" type="text" maxLength="30" class=" required   span8 nothing" />
					</div> */}
					{/* <div className = "form-group">	
						<label className="control-label">State<span className='text text-error'></span> </label>
						<input id="addr_state" name="addr_state" type="text" maxLength="30" className=" required   span8 nothing" />	
                    </div> */}
                    {/* <div className = "form-group">
						<label className="control-label">Zip Code<span className='text text-error'><b>*</b></span> </label>	
						<input id="addr_zip" name="curAddrZip" type="text" maxLength="5" size="5" className=" required  span4 alphanumeric" />
					</div>	 */}
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
