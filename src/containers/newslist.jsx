import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { DEFAULT_PAGE_SIZE } from '../store/constants';

import {
  fetchNews,
  authLogout,
} from '../store/actions';

import { Pagination, Button } from 'antd';
import '../../node_modules/antd/lib/button/style/index.css';
import '../../node_modules/antd/lib/pagination/style/index.css';
import '../scss/libraries/_pagination.scss';
import '../scss/libraries/_button.scss';

import News from '../components/news';

import '../scss/widgets/_inner-page.scss';

class Newslist extends Component {
  constructor(props) {
    super(props);

    this.defaultPageSize = DEFAULT_PAGE_SIZE;
    this.state = {
      news: [],
      minValue: 0,
      maxValue: this.defaultPageSize,
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    news: nextProps.news,
  });

  componentDidMount() {
    this.props.fetchNews();
  }

  paginationChange = value => {
    this.setState({
      minValue: (value * this.defaultPageSize) - this.defaultPageSize,
      maxValue: value * this.defaultPageSize,
    });
  };

  render() {
    const { isAuth } = this.props;
    const { news } = this.state;
    const total = news.length;

    if (!isAuth) {
      return <Redirect to='/login'/>;
    }

    return (
      <div className="app__news inner-page">
        <header className="inner-page__header">
          <div className="inner-page__container">
            <h1 className="inner-page__name">News</h1>
          </div>
        </header>
        <main role="main" className="inner-page__body">
          <div className="inner-page__container">
            {news.slice(this.state.minValue, this.state.maxValue).map((item, index) => {
              return (
                <News
                  key={ index }
                  id={ item.id }
                  date={ item.date }
                  header={ item.header }
                  anons={ item.anons }
                  text={ item.text }
                />
              );
            })}
          </div>
        </main>
        <footer role="contentinfo" className="inner-page__footer">
          <div className="inner-page__container inner-page__container--fliud">
            <Pagination
              className="pagination--desktop"
              defaultCurrent={ 1 }
              defaultPageSize={ this.defaultPageSize }
              onChange={ this.paginationChange }
              total={ total }
            />
            <Pagination
              className="pagination--mobile"
              simple
              defaultCurrent={ 1 }
              defaultPageSize={ this.defaultPageSize }
              onChange={ this.paginationChange }
              total={ total }
            />
            <div className="inner-page__logout">
              <Button
                type="primary"
                icon="logout"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.authLogout();
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </footer>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  news: state.rootReducer.news.news,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNews: () => dispatch(fetchNews()),
  authLogout: () => dispatch(authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Newslist);
