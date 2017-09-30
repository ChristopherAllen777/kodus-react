import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
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
        this.props.auth.login();
    }
  
    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header navbar-brand">
                            <a href="/">Kodus Property Management</a>
                        </div>
                    </div>
                    <div id="navbar" className="navbar-right">
                    {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
            {/* {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            } */}
            {/* {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            } */}
            {/* {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            } */}
                    
                        <ul className="nav navbar-nav">
                            <li><Link activeClassName="active" to="/" onlyActiveOnIndex>Home</Link></li>
                            {
                                isAuthenticated() && (
                                    <li><Link activeClassName="active" to="/detail" onlyActiveOnIndex>Detail Listing</Link></li>
                                )
                            }
                            {/* <li><Link activeClassName="active" to="/thankyou" onlyActiveOnIndex>Thank You</Link></li>
                            <li><Link activeClassName="active" to="/thankyoumaintenance" onlyActiveOnIndex>Thank You Maintenance</Link></li> */}
                            <li><Link activeClassName="active" to="/users/register" onlyActiveOnIndex>Register</Link></li>

                            {
                                isAuthenticated() && (
                                    <li><Link activeClassName="active" to="/maintenance" onlyActiveOnIndex>Maintenance</Link></li>
                                )
                            }
                            <li><Link activeClassName="active" to="/rental" onlyActiveOnIndex>Property Search</Link></li>
                            {
                                !isAuthenticated() && (
                                    <li><Link activeClassName="active" to="/Callback/callback" onClick={this.login.bind(this)} onlyActiveOnIndex>User Login</Link></li>
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <li><Link activeClassName="active" to="/Callback/callback" onClick={this.logout.bind(this)} onlyActiveOnIndex>User Logout</Link></li>
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <li><Link activeClassName="active" to="/Profile/profile" onClick={this.goTo.bind(this, 'profile')} onlyActiveOnIndex>Profile</Link></li>
                                )
                            }
                    
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
