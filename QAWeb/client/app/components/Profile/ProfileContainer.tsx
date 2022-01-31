import * as React from 'react';
import {connect} from "react-redux";
import { Button, CircularProgress, Divider, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { ProfileActions } from './store/profile.actions';
import { ApplicationState } from '../../store/application-state';
import { UserProfileState } from '../NavBar/store/nav-bar';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from "react-router-dom";
import { AccountCircle, ArrowBackIos } from '@material-ui/icons';
import history from '../../history';

interface ProfileProps {
  userName: string,
  password: string,
  changeUserName: any,
  changePassword: any,
  saveChanges: Function,
  logout: Function,
  userProfile: UserProfileState,
  isLoading: boolean,
  isUpdated: boolean,
  topics: []
}

interface ProfileState {
  confirmPassword: string
}

class ProfileContainer extends React.Component<ProfileProps, ProfileState> {

  constructor(props) {
    super(props);

    this.state = {
      confirmPassword: ''
    }
  }

  changeConfirmPassword = (event) => {
    this.setState({confirmPassword: event.target.value})
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      return value === this.props.password;
    });
  }

  saveChanges(userName, password) {
    this.props.saveChanges(userName, password);
  }

  logout() {
    this.props.logout();
  }

  render() {
    const renderBody = (<ValidatorForm onSubmit={(event) => {
      event.preventDefault();
      return this.saveChanges(this.props.userName, this.props.password);
    }}>
      <div style={{alignSelf: 'center'}}>
        <AccountCircle style={{marginLeft: '48%'}}/>
      </div>
      <h1 style={{textAlign: 'center'}}>
        {this.props.userProfile.userName}'s profile
      </h1>
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

      <div style={{width: '100%'}}>
        <TextValidator
          name="confirmPassword"
          placeholder="Confirm Password"
          variant="outlined"
          value={this.state.confirmPassword}
          margin="normal"
          onChange={this.changeConfirmPassword}
          type="password"
          className="width-100"
          validators={['isPasswordMatch']}
          errorMessages={['Password must match!']}
        />
      </div>

      <div>
        <Button type="submit" variant='contained' className="width-100" style={{marginTop: 8}}>Save changes</Button>
      </div>
    </ValidatorForm>);

    const editProfile = (<React.Fragment>
      <Link to="/profile">
        <Button type="submit" variant='outlined'>
          <ArrowBackIos/>
          Back
        </Button>
      </Link>
      <div onClick={() => this.logout()} style={{float: 'right'}}>
        <Button type="submit" variant='outlined'>Logout</Button>
      </div>
      {renderBody}

      {this.props.isLoading && <CircularProgress style={{marginLeft: '45%', marginTop: 40}}/>}
      {this.props.isUpdated && <div style={{color: '#3c763d', marginTop: 40, textAlign: 'center'}}><i>Profile updated! Log in again to see changes.</i></div>}
    </React.Fragment>);

    const topics = this.props.topics && this.props.topics.map((topic: {id: number, name: string}) => {
      return <Link to={`/topics/${topic.id}`} key={topic.id}>{topic.name}, </Link>;
    });

    const viewProfile = (<div style={{textAlign: 'center'}}>
      <div onClick={() => this.logout()} style={{float: 'right',}}>
        <Button type="submit" variant='outlined'>Logout</Button>
      </div>
      <Link to="profile/edit" style={{float: 'right', marginRight: 8}}>
        <Button type="submit" variant='outlined'>Edit</Button>
      </Link>

      <h1>{this.props.userProfile.userName}</h1>

      <List component="nav">
        <ListItem>
          <ListItemText primary={`User name: ${this.props.userProfile.userName}`} />
        </ListItem>
      </List>
    </div>);

    return(
      <div style={{display: 'flex', height: '100%'}}>
        <div className="login-container">
          {history.location.pathname.includes('edit') ?  editProfile : viewProfile}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    userName: state.profile.userName,
    password: state.profile.password,
    userProfile: state.userProfile,
    topics: state.profile.topics,
    isLoading: state.profile.isLoading,
    isUpdated: state.profile.isUpdated
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserName: (event) => {
      dispatch(ProfileActions.changeUserName(event.target.value));
    },
    changePassword: (event) => {
      dispatch(ProfileActions.changePassword(event.target.value));
    },
    saveChanges: (userName, password) => {
      dispatch(ProfileActions.saveChangesStarted(userName, password));
    },
    logout: () => {
      dispatch(ProfileActions.logout())
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

