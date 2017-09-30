import React, { Component } from 'react';

export default class PropertySearch extends Component {

    // getInitialState() {
    //     return {
    //         address: ""
    //     };
    // }
    constructor(props){
        super(props);
        this.state = {
            address: ""
        };
        // this.state.address="";
        // this.clickMarker = this.clickMarker.bind(this);
    };

    handleChange(event) {
        console.log("Text changed");

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Clicked");
        this.props.updateSearch(this.state.address);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <h4 className=""><strong>Address</strong></h4>
                    <input
                        type="text"
                        value={this.state.address}
                        className="form-control"
                        id="address"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="pull-right">
                    <button
                        type="submit"
                        className="btn btn-danger"

                    >
                        <h4>Submit</h4>
                    </button>
                </div>
            </form> 
        )
    }
}
