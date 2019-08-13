// Actions Types

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Action Creators

export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const authSuccess = () => ({
  type: AUTH_ERROR
});

export const authError = (error) => ({
  type: AUTH_SUCCESS,
  error
});

export const authLogout = () => ({
  type: AUTH_LOGOUT
});