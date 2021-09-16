import axios from 'axios';

export default class {
  constructor(url = 'http://localhost:3000') {
    this.url = url;
  }

  async getList(page = 1, limit = 50) {
    const list = (await axios.get(`${this.url}/users`, {
      params: {
        _page: page,
        _limit: limit
      }
    })).data;
  
    return list.map(user => {
      return {
        id: user.id,
        name: user.name
      }
    })
  }
}