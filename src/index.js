import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './store'
import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
    {/* </ConnectedRouter> */}
  </Provider>

), document.getElementById('root'));
