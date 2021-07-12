import axios from 'axios';

export default {
  async getList(params = {}) {
    const list = await axios.get('http://localhost:3000/users', { ...params });
    return list.data;
  }
}