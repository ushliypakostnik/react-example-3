import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Login from './login';
import Newslist from './newslist';
import Page404 from '../components/page404';

const PrivateRoute = ({component: Component, auth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => auth
        ? <Component {...props} isAuth={auth} />
        : <Redirect to='/login' />}
    />
  )
};

const LoginRoute = ({component: Component, auth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => auth
        ? <Redirect to='/' />
        : <Component {...props} />}
    />
  )
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    isAuth: nextProps.isAuth,
  });

  render() {
    const { isAuth } = this.state;

    return (
      <div className="app">
        <Switch>
          <LoginRoute path="/login" auth={ isAuth } component={ Login } />
          <PrivateRoute exact path="/" auth={ isAuth } component={ Newslist } />
          <Route component={ Page404 } />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.rootReducer.auth.isAuth,
});

export default connect(mapStateToProps, null)(App);
