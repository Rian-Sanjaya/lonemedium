import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import agent from '../agent';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import Header from './Header'
import Home from './Home'
import Register from './Register'

class App extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: ', nextProps)

    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: ', prevProps)
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount: ', this.props)

    const token = window.localStorage.getItem('jwt')
    // console.log('token: ', token)
    if (token) {
      agent.setToken(token)
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token)
  }

  render() {
    console.log('render')

    if (this.props.appLoaded) {
      return (
        <div>
          <Header 
            appName={this.props.appName}
            currentUser={this.props.currentUser} 
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      )
    }

    return (
      <div>
        <Header 
          appName={this.props.appName}
          currentUser={this.props.currentUser} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) => 
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => 
    dispatch({ type: REDIRECT })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
