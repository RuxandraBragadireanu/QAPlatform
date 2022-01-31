import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore}  from "redux";
import reducers from './store/reducers';
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./store/sagas";
import history from './history';
import NavBarContainer from './components/NavBar/NavBarContainer';
import { Routes } from './Routes';

console.log("startApp");

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

// run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <NavBarContainer/>
        <Routes/>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'));
