import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import reducers from './reducers';
import Homepage from './components/Homepage';
import Nav from './Nav';
import DetailListing from './components/DetailListing';
import ThankYou from './components/ThankYou';
import ThankYouMaintenance from './components/ThankYouMaintenance';
import Register from './components/Register';
import OtherRouteSample from './components/OtherRouteSample';
import Login from './components/Login';
import Maintenance from './components/Maintenance';
import Property from './components/Property';
import Api from './components/Api';
import LandlordInfo from './components/LandlordInfo';
import Property_form from './components/property_form'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
          <Route path="/" component={Nav}>
              <IndexRoute component={Homepage}/>
              <Route path='/detail' component={DetailListing}/>
              <Route path='/thankyou' component={ThankYou}/>
              <Route path='/thankyoumaintenance' component={ThankYouMaintenance}/>
              <Route path='/users/register' component={Register}/>
              <Route path='/other-route' component={OtherRouteSample}/>
              <Route path='/users/login' component={Login}/>
              <Route path='/maintenance' component={Maintenance}/>
              <Route path='/rental' component={Property}/>
              {/* <Route path='/api/:model_name' component={Api}/> */}
              <Route path='/landlords' component={LandlordInfo}/>
              <Route path='/property_form' component={Property_form}/>
          </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
