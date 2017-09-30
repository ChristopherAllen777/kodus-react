import React from 'react';
import { Link } from 'react-router';

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
                            <a href="/">React starter kit</a>
                        </div>
                    </div>
                    <div id="navbar" className="navbar-right">
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
                            {/* <li><Link activeClassName="active" to="/api/:model_name" onlyActiveOnIndex>API GET</Link></li> */}
                            <li><Link activeClassName="active" to="/api/landlord" onlyActiveOnIndex>Landlords</Link></li>
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
