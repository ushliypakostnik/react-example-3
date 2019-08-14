import { INITIAL_STATE } from './constants';

import { combineReducers } from 'redux';

const auth = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case 'AUTH_REQUEST':
      return Object.assign({}, state, {
      });
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        isAuth: true,
      });
    case 'AUTH_ERROR':
      return Object.assign({}, state, {
        error: action.error,
      });
    case 'AUTH_LOGOUT':
      return Object.assign({}, state, {
        isAuth: false,
      });
    default:
      return state;
  }
};

const news = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case 'NEWS_REQUEST':
      return Object.assign({}, state, {
      });
    case 'NEWS_SUCCESS':
      return Object.assign({}, state, {
        news: action.news,
      });
    case 'NEWS_ERROR':
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth,
  news,
});

export default rootReducer;
