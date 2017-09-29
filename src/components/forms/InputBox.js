
import React, { Component } from 'react';

import MyComponent from "../utils/MyComponent";


export default class InputBox extends MyComponent {

	// constructor(props) {
	// 	// let custom_methods = [
	// 	// 	'submitForm',
	// 	// ];
	// 	// super(props, custom_methods);
	// 	// this.state = {};
	// }

    render () {
        let { slug, text, type, this_value} = this.props;
       
        function registerRef(element) {
            this_value[slug] = element;
        }

        return (
            <div className = "form-group">	
				<label className="control-label">{text} <span className='text text-error'></span> </label>
				<input id={slug} name={slug} type={type} className="required span5  alphanumeric" ref={registerRef} />		
            </div>  
        )
    }
}

InputBox.defaultProps = {
    type: "text"
}