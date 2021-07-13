import axios from 'axios';

export default class UsersAdapter {
  constructor(url = 'http://localhost:3000') {
    this.url = url;
  }

  async getList() {
    const list = (await axios.get(`${this.url}/users`)).data;
    return list;
  }
}