import * as React from 'react';
import {connect} from "react-redux";
import { Button, TextField } from '@material-ui/core';
import { LoginActions } from './store/login.actions';
import AccesibilityIcon from '@material-ui/icons/AccessibilityOutlined';
import { ApplicationState } from '../../store/application-state';
import { UserProfileState } from '../NavBar/store/nav-bar';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from "react-router-dom";

interface LoginProps {
  userName: string,
  password: string,
  changeUserName: any,
  changePassword: any,
  badCredentials: boolean,
  login: Function,
  userProfile: UserProfileState
}

class LoginContainer extends React.Component<LoginProps, {}> {

  login(userName, password) {
    this.props.login(userName, password);
  }


  render() {
    const renderBody = !this.props.userProfile.isAuthenticated &&
      (
        <ValidatorForm onSubmit={(event) => {
          event.preventDefault();
          return this.login(this.props.userName, this.props.password);
        }} >
          <div style={{alignSelf: 'center'}}>
            <AccesibilityIcon style={{marginLeft: '48%'}}/>
          </div>
          <h1 style={{textAlign: 'center'}}>
            Sign in to access the app!
          </h1>
          <h3 style={{textAlign: 'center', color: 'gray'}}>
            Or <Link to='signup'><u><b>register</b></u></Link> if you don't have an account.
          </h3>
          <div>
            <TextValidator
              name="username"
              placeholder="User name"
              variant="outlined"
              value={this.props.userName}
              margin="normal"
              onChange={this.props.changeUserName}
              className="width-100"
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </div>

          <div style={{width: '100%'}}>
            <TextValidator
              name="password"
              placeholder="Password"
              variant="outlined"
              value={this.props.password}
              margin="normal"
              onChange={this.props.changePassword}
              type="password"
              className="width-100"
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </div>

          <div>
            <Button type="submit" variant='contained' className="width-100" style={{marginTop: 8}}>Log in</Button>
          </div>

          <div style={{marginTop: 20, textAlign: 'center'}}>{this.props.badCredentials && 'Wrong username or password...'}</div>
        </ValidatorForm>
      );

    return(
      <div style={{display: 'flex', height: '100%'}}>
        <div className="login-container">
          {renderBody}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    userName: state.login.userName,
    password: state.login.password,
    badCredentials: state.login.badCredentials,
    userProfile: state.userProfile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserName: (event) => {
      dispatch(LoginActions.changeUserName(event.target.value));
    },
    changePassword: (event) => {
      dispatch(LoginActions.changePassword(event.target.value));
    },
    login: (userName, password) => {
      dispatch(LoginActions.loginStarted(userName, password));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

