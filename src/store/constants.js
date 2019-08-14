export const INITIAL_STATE = {
  rootReducer: {
    auth: {
      isAuth: false,
      error: null,
    },
    news: {
      news: [],
      error: null,
    },
  },
  routing: {}
};

export const DEFAULT_PAGE_SIZE = 10;
