import React from 'react';
import { Link } from 'react-router';

const buttonStyle = {
    backgroundColor: '#8f4aea',
    left: '255px',
    top: '-20px',
    position: 'absolute'
}

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header navbar-brand">
                        <Link activeClassName="active" to="/" onlyActiveOnIndex><img width="150px" src="public/assets/images/koduslogo-colored.jpg"></img></Link>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" style={buttonStyle} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                React Page Links
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><Link activeClassName="active" to="/" onlyActiveOnIndex>Home</Link></li>
                            <li><Link activeClassName="active" to="/detail" onlyActiveOnIndex>Detail Listing</Link></li>
                            <li><Link activeClassName="active" to="/thankyou" onlyActiveOnIndex>Thank You</Link></li>
                            <li><Link activeClassName="active" to="/thankyoumaintenance" onlyActiveOnIndex>Thank You Maintenance</Link></li>
                            <li><Link activeClassName="active" to="/users/register" onlyActiveOnIndex>Register</Link></li>
                            <li><Link activeClassName="active" to="/other-route" onlyActiveOnIndex>Other route</Link></li>
                            <li><Link activeClassName="active" to="/users/login" onlyActiveOnIndex>User Login</Link></li>
                            <li><Link activeClassName="active" to="/maintenance" onlyActiveOnIndex>Maintenance</Link></li>
                            <li><Link activeClassName="active" to="/rental" onlyActiveOnIndex>Property</Link></li>
                        </div>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
        </div>
        )
    }
}
