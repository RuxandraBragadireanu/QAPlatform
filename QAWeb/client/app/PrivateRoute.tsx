import { Redirect, Route, RouteProps } from 'react-router';
import * as React from 'react';
import { store } from './index';

interface PrivateRouteProps extends RouteProps{
  component: any,
  path: string,
  exact?: boolean,
  strict?: boolean
}

interface PriveRouteState {
  isAuthenticated: boolean,
  isReady: boolean
}

export class PrivateRoute extends React.Component<PrivateRouteProps, PriveRouteState> {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      isAuthenticated: false
    }
  }

  componentWillMount(): void {
    store.subscribe(() => {
      const {isAuthenticated, isReady} = store.getState().userProfile;
      this.setState({isReady, isAuthenticated});
    })
  }

  render() {

    const { path, component, exact, strict } = this.props;

    const route = this.state.isAuthenticated
      ?
        <Route path={path} exact={exact} strict={strict} component={component}/>
      : <Route path={path} render={() => (
          <Redirect to='/login'/>
      )} />;

    const result = this.state.isReady ? route : null;

    return (
      result
    );
  }
}
