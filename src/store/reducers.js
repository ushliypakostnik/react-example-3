import { INITIAL_STATE } from './constants';

const reducer = (state, action) => {
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
}

export default reducer;
