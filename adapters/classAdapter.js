import axios from 'axios';

class Adapter {
  constructor(http = 'http://localhost:3000') {
    this.url = http;
  }

  async getList(params) {
    return (await axios.get(`${this.url}/users`, { params })).data;
  }
}

export default Adapter;