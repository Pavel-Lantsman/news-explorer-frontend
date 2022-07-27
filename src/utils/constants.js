const MAIN_API_URL = 'https://api.pavel22lantsman.news-explorer.students.nomoredomainssbs.ru';

// const NEWS_API_URL = 'https://newsapi.org/v2'; // Original
const NEWS_API_URL = 'https://nomoreparties.co/news/v2'; // Proxy

const NEWS_API_KEY = '5144268c945c4f179a6acd4c47457b3b';

const DEFAULT_CURRENT_USER = {
  data: {
    name: undefined,
  },
  isLoggedIn: false,
  isLoading: false,
  isAuthRequired: false,
};

const DEFAULT_LAST_SEARCH = {
  query: undefined,
  results: [],
  isLoading: false,
  isError: false,
};

const DEFAULT_SAVED_ARTICLES = {
  data: [],
  isLoading: false,
};

const NOTIFICATION_DURATION = 3 * 1000;

const RESULTS_INTERVAL = 7 * 24 * 60 * 60 * 1000;
const RESULTS_SIZE = 100;

export {
  MAIN_API_URL,
  NEWS_API_URL,
  NEWS_API_KEY,
  DEFAULT_CURRENT_USER,
  DEFAULT_LAST_SEARCH,
  DEFAULT_SAVED_ARTICLES,
  NOTIFICATION_DURATION,
  RESULTS_INTERVAL,
  RESULTS_SIZE,
};
