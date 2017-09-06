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
          </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
