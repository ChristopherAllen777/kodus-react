import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Auth from './Auth/Auth';


export default class Nav extends Component {
    constructor(props) {
        super(props);
        console.log("test");
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }
  
    login(){
        this.props.route.auth.login();
    }
  
    logout() {
        this.props.route.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.route.auth;
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header navbar-brand">
                            <a href="/">React starter kit</a>
                        </div>
                    </div>
                    <div id="navbar" className="navbar-right">
                    <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
                    
                        <ul className="nav navbar-nav">
                            <li><Link activeClassName="active" to="/" onlyActiveOnIndex>Home</Link></li>
                            <li><Link activeClassName="active" to="/detail" onlyActiveOnIndex>Detail Listing</Link></li>
                            <li><Link activeClassName="active" to="/thankyou" onlyActiveOnIndex>Thank You</Link></li>
                            <li><Link activeClassName="active" to="/thankyoumaintenance" onlyActiveOnIndex>Thank You Maintenance</Link></li>
                            <li><Link activeClassName="active" to="/users/register" onlyActiveOnIndex>Register</Link></li>
                            <li><Link activeClassName="active" to="/other-route" onlyActiveOnIndex>Other route</Link></li>
                            <li><Link activeClassName="active" to="/users/login" onlyActiveOnIndex>User Login</Link></li>
                            <li><Link activeClassName="active" to="/maintenance" onlyActiveOnIndex>Maintenance</Link></li>
                            <li><Link activeClassName="active" to="/rental" onlyActiveOnIndex>Property</Link></li>
                        </ul> 
                    </div>
                    
                </nav>

                <div className="container">
                    {this.props.children}
                </div>
        </div>
        )
    }
}
