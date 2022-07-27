class BaseApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  sendRequest(targetUrl, method = 'GET', options = {}) {
    return fetch(this._baseUrl + targetUrl, {
      ...options,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }).then(this._checkResponse);
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then((error) => Promise.reject(error));
  }
}

export default BaseApi;
