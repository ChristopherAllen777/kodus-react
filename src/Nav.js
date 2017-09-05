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
                            <li><Link activeClassName="active" to="/other-route" onlyActiveOnIndex>Other route</Link></li>
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
