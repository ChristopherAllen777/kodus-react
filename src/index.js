import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import reducers from './reducers';
import Homepage from './components/Homepage';
import Nav from './Nav';
import OtherRouteSample from './components/OtherRouteSample';
import Login from './components/Login';
import Maintenance from './components/Maintenance';
import Property from './components/Property'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
          <Route path="/" component={Nav}>
              <IndexRoute component={Homepage}/>
              <Route path='/other-route' component={OtherRouteSample}/>
              <Route path='/users/login' component={Login}/>
              <Route path='/maintenance' component={Maintenance}/>
              <Route path='/rental' component={Property}/>
          </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
