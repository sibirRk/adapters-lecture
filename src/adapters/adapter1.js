import axios from 'axios';

export default {
  async getList() {
    const list = (await axios.get('http://localhost:3000/users', {
      _page: 1,
      _limit: 50
    })).data;
  
    return list.map(user => {
      return {
        id: user.id,
        name: user.name
      }
    })
  }
}