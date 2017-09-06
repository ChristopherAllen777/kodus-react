import React, { Component } from 'react';

export default class Register extends Component {
    render () {
        return (
            <div>
                <div className="header">
                    <h1>Kodus</h1>
                    <h2>Register</h2>
                        <div id="comment">
                            This is where users will register - Chris
                        </div>
            
                    <div className="row">
                        <div className="col-md-6">
                            <ul id="notDevoured">
                                {/* {{#each rental}} */}
                                        <div className="notDevouredList">
                                            {/* {{this.id}}. {{this.property_name}} */}
                                            <form action="/{{this.id}}?_method=PUT" method="POST" id="devourIt">
                                                <input type="hidden" name="devoured" value="true"/>
                                                <button type="submit" id="devourBtn">Devour it!</button>
                                            </form>
                                        </div>
                                {/* {{/each}} */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}