import BaseApi from './BaseApi';
import { MAIN_API_URL } from './constants';

class MainApi extends BaseApi {
  _authToken = undefined;

  signIn({ email, password }) {
    return this.sendRequest('/signin', 'POST', {
      body: JSON.stringify({ email, password }),
    });
  }

  signUp({ email, password, name }) {
    return this.sendRequest('/signup', 'POST', {
      body: JSON.stringify({ email, password, name }),
    });
  }

  getCurrentUser(token) {
    this._setAuthToken(token);

    return this._sendRequestWithAuth('/users/me');
  }

  getSavedArticles() {
    return this._sendRequestWithAuth('/articles');
  }

  saveArticle({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  }) {
    return this._sendRequestWithAuth('/articles', 'POST', {
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    });
  }

  removeArticle(id) {
    return this._sendRequestWithAuth(`/articles/${id}`, 'DELETE');
  }

  _sendRequestWithAuth(targetUrl, method = 'GET', options = {}) {
    return this.sendRequest(targetUrl, method, {
      ...options,
      headers: {
        Authorization: this._authToken,
        ...options.headers,
      },
    });
  }

  _setAuthToken(token) {
    this._authToken = `Bearer ${token}`;
  }
}

export default new MainApi(MAIN_API_URL);
