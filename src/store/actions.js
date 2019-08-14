import CONTENT from './content';

// Actions Types

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_ERROR = 'NEWS_ERROR';

// Action Creators

export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS
});

export const authError = (error) => ({
  type: AUTH_ERROR,
  error
});

// fake async fetch
function authResult(dispatch) {
  dispatch(authSuccess());
}
export const fetchAuth = (credentials) => {
  return dispatch => {
    dispatch(authRequest(credentials));
    setTimeout(authResult(dispatch), 100);
  }
}

export const authLogout = () => ({
  type: AUTH_LOGOUT
});

export const newsRequest = () => ({
  type: NEWS_REQUEST
});

export const newsSuccess = (news) => ({
  type: NEWS_SUCCESS,
  news
});

export const newsError = (error) => ({
  type: NEWS_ERROR,
  error
});

// fake async fetch
function newsResult(dispatch) {
  dispatch(newsSuccess(CONTENT));
}
export const fetchNews = () => {
  return dispatch => {
    dispatch(newsRequest());
    setTimeout(newsResult(dispatch), 100);
  }
};
