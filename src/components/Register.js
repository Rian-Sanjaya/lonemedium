import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import agent from '../agent';

import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED,
} from '../constants/actionTypes';

class Register extends React.Component {
  constructor(props) {
    super(props)
    
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    // console.log({propsObj: this.props})
    const email = this.props.email || "";
    const password = this.props.password || "";
    const username = this.props.username || "";

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>

              <form onSubmit={this.submitForm(username, email, password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input 
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.changeUsername}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Sign up
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value => 
    dispatch({ 
      type: UPDATE_FIELD_AUTH,
      key: "email",
      value
    }),
  onChangePassword: value => 
    dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
  onChangeUsername: value => 
    dispatch({ type: UPDATE_FIELD_AUTH, key: "username", value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    console.log('isi payload: ', payload)
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)