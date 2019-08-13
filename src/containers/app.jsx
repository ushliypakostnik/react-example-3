import React, { Component } from "react";
/* eslint-disable no-unused-vars */
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';

// Styles
import '../scss/layouts/_app.scss';

import News from './news';

function Login() {
  return <h1>Login</h1>;
}

function Page404() {
  return <h1>Page Not Found!!!</h1>;
}

function PrivateRoute ({component: Component, auth, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => auth
        ? <Component {...props} isAuth={auth} />
        : <Redirect to='/login' />}
    />
  )
}

function LoginRoute ({component: Component, auth, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => auth
        ? <Redirect to='/' />
        : <Component {...props} />}
    />
  )
}

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

  componentDidMount() {

  }

  render() {
    const { isAuth } = this.state;
    console.log( 'App: ', isAuth );

    return (
      <div className="app">
        <Switch>
          <LoginRoute path="/login" auth={ isAuth } component={ Login } />
          <PrivateRoute exact path="/" auth={ isAuth } component={ News } />
          <Route component={ Page404 } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.reducer.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
