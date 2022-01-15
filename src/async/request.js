import Host from '../host';

class Request {
  constructor(httpMethod, body, isAuth, url) {
    this.httpMethod = httpMethod;
    this.body = body;
    this.isAuth = isAuth;
    this.url = url;
  }

  async myFetch(uri) {
    const myHeaders = { 'Content-Type': 'application/json' }
    const config = { httpMethod: this.httpMethod }

    if (this.isAuth) {
      const auth = JSON.parse(localStorage.getItem('auth'));
      if (auth != null)
        myHeaders['Authorization'] = `Bearer ${auth.token}`;
    }

    if (this.httpMethod !== 'GET')
      config['headers'] = myHeaders;
    config['body'] = JSON.stringify(this.body);

    const response = await fetch(uri, config);
    return await response.json();
  }

  async exec() {
    return await this.myFetch(Host + this.url);
  }
}

export default Request;
