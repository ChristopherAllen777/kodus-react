import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Nav from './Nav';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Profile from './Profile/Profile';

import Homepage from './components/Homepage';
// import Nav from './Nav';
import DetailListing from './components/DetailListing';
import ThankYou from './components/ThankYou';
import ThankYouMaintenance from './components/ThankYouMaintenance';
import Register from './components/Register';
import OtherRouteSample from './components/OtherRouteSample';
import Login from './components/Login';
import Maintenance from './components/Maintenance';
import Property from './components/Property'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history} component={Nav}>
          <div>
              {/* <Route path="/" component={Nav} auth={auth}> */}
                
              <Route path="/" render={(props) => <Nav auth={auth} {...props} />} />
              {/* <Route path="/profile" render={(props) => (
                  !auth.isAuthenticated() ? (
                      <Redirect to="/"/>
                  ) : (
                      <Profile auth={auth} {...props} />
                  )
              )} /> */}
              <Route path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} />
              }}/>
              
              <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path="/detail" component={DetailListing} />
              <Route path='/thankyou' component={ThankYou}/>
              <Route path='/thankyoumaintenance' component={ThankYouMaintenance}/>
              <Route path='/users/register' component={Register}/>
              <Route path='/other-route' component={OtherRouteSample}/>
              <Route path='/users/login' component={Login}/>
              <Route path='/maintenance' component={Maintenance}/>
              <Route path='/rental' component={Property}/>
              <Route path="/profile" render={(props) => (
                  !auth.isAuthenticated() ? (
                      <Redirect to="/"/>
                  ) : (
                      <Profile auth={auth} {...props} />
                  )
              )} />
              </Switch>
              {/* <Route path='/detail' component={DetailListing}/> */}
              
          {/* </Route> */}
          </div>
    </Router>
  // </Provider>
    );
  }