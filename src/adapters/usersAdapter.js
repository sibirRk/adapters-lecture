import axios from 'axios';

export default {
  /* 
  * Получаем список пользователей
  * @param {number} page
  * @param {number} limit
  */
  async getList(page = 1, limit = 5) {
    const list = (await axios.get('http://localhost:3000/users', {
      params: {
        _page: page,
        _limit: limit,
      },
    })).data;
    const resultArr = [];

    list.forEach(item => {
      resultArr.push({
        id: item.id,
        name: item.name,
      })
    });

    return resultArr;
  }
}