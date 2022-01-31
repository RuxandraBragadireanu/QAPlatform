import * as React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import { NavBarActions } from './store/nav-bar.actions';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AccountCircle, Home } from '@material-ui/icons';
import { ApplicationState } from '../../store/application-state';

interface NavBarProps{
  userName: string,
  appTitle: string,
  isAuthenticated: boolean,
  loadUserProfile: Function
}

class NavBarContainer extends React.Component<NavBarProps, {}> {

  componentWillMount() {
    this.props.loadUserProfile();
  }

  render() {
    const loginInfo = this.props.isAuthenticated ? this.props.userName : <AccountCircle/>;

    return(
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link to="/" style={{width: '5%', display: 'flex', justifyContent: 'center'}}>
              <Home nativeColor='white'/>
            </Link>
            <Typography variant="h6" style={{width: '90%', display: 'flex', justifyContent: 'center'}}>
              <Link to="/topics" style={{color: 'white'}}>{this.props.appTitle}</Link>
            </Typography>
            <Link to={this.props.isAuthenticated ? '/profile' :'/login'} style={{width: '5%', display: 'flex', justifyContent: 'center', color: 'white'}}>
              {loginInfo}
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    appTitle: state.userProfile.appTitle,
    userName: state.userProfile.userName || '',
    isAuthenticated: state.userProfile.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadUserProfile: () => {
      dispatch(NavBarActions.loadProfile())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
