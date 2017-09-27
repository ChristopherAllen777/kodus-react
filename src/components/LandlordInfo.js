import React, { Component } from 'react';

export default class LandlordInfo extends Component {
    render () {
        return (
        <div>
        <div className ="maincontainer">

			<form id="applicationInformation form-horizontal" method="post">

			{/* <!-- ==== Landlord Information ===  --> */}
				<h2> Landlord Information </h2>
				
				<div className = "landlordInfo well">
					<div className = "form-group">
						<label className="control-label">Title </label>
						<select id="salutation" name="salutation">
							<option value=""></option>
							<option value="Mr.">Mr.</option>
							<option value="Ms.">Ms.</option>
							<option value="Mrs.">Mrs.</option>
						</select>
					</div>
					<div className = "form-group">
						<label className="control-label">First Name  <span className='text text-error'></span> </label>
						<input id="firstName" name="firstName" type="text" className="required span5  alphanumeric" />
					</div>	
					<div className = "form-group">				
						<label className="control-label">Middle Name </label>
						<input id="middleName" name="middleName" type="text"  className=" span5  alphanumeric"  />
					</div>
					<div className = "form-group">	
						<label className="control-label">Last Name <span className='text text-error'></span> </label>
						<input id="lastName" name="lastName" type="text" className="required span5  alphanumeric" />		
					</div>  
                    <div className = "form-group">	
						<label className="control-label">Phone1 </label>
						<input id="phone1" name="phone1" type="text" maxLength="12" size = "12" className="required phone1 span8  nothing" placeholder="512-555-5555" />
					</div>
                    <div className = "form-group">	
						<label className="control-label">Phone1 Type </label>
						<input id="phone1Type" name="phone1Type" type="text" maxLength="12" size = "12" className="required phone1Type span8  nothing" placeholder="input" />
					</div>
                    <div className = "form-group">	
						<label className="control-label">Phone2 </label>
						<input id="phone2" name="phone2" type="text" maxLength="12" size = "12" className="required phone2 span8  nothing" placeholder="512-555-5555" />
					</div>
                    <div className = "form-group">	
						<label className="control-label">Phone2 Type </label>
						<input id="phone2Type" name="phone2Type" type="text" maxLength="12" size = "12" className="required phone2Type span8  nothing" placeholder="input" />
					</div>
					<div className = "form-group">	
						<label className="control-label">Email <span className='text text-error'></span> </label>
						<input id="email" name="email" type="text" maxLength="60" size ="40" className=" required   span8  nothing" placeholder="jane.doe@example.com" />
					</div>
					<div className = "form-group">	
						<label className="control-label">Address Line 1 <span className='text text-error'><b>*</b></span> </label>
						<input id="Addr1" name="Addr1" type="text" maxLength="50" size="40" className=" required  span8  nothing" />
					</div>
					<div className = "form-group">	
						<label className="control-label">Address Line 2 <span className='text text-error'><b>*</b></span> </label>
						<input id="Addr2" name="Addr2" type="text" maxLength="50" size="40" className=" required  span8  nothing" />
					</div>
					<div className = "form-group">	
						<label className="control-label">City <span className='text text-error'></span> </label>
						<input id="addr_city" name="addr_city" type="text" maxLength="30" class=" required   span8 nothing" />
					</div>
					<div className = "form-group">	
						<label className="control-label">State<span className='text text-error'></span> </label>
						<input id="addr_state" name="addr_state" type="text" maxLength="30" className=" required   span8 nothing" />	
                    </div>
                    <div className = "form-group">
						<label className="control-label">Zip Code<span className='text text-error'><b>*</b></span> </label>	
						<input id="addr_zip" name="curAddrZip" type="text" maxLength="5" size="5" className=" required  span4 alphanumeric" />
					</div>	


				</div>         
            </form>
        </div>
        </div>
        );
    }
}
