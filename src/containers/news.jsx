import React, { Component } from "react";
/* eslint-disable no-unused-vars */
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// Styles
import '../scss/layouts/_app.scss';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => ({
  });

  componentDidMount() {

  }

  render() {
    const { isAuth } = this.props;
    console.log( 'News: ', this.props );

    if (!isAuth) {
      return <Redirect to='/login'/>;
    }

    return (
      <div className="app__news">
        <h1>News</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
