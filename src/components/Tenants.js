import React, { Component } from 'react';

export default class Tenants extends Component {
    render () {
        return (
            <div>
                <div className="header">
                    <h1>Kodus</h1>
                    <h2> Tenants</h2>
                        <div id="comment">
                            This is where registered tenats will be able to make maintence requests and later on will be able to do 
                            payments and all other features. - Chris
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