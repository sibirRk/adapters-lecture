import axios from 'axios';
import { IApiResponse, IUser } from '@/types/interfaces';

export default class Adapter {
  url: string;

  constructor(url: string = 'http://localhost:3000') {
    this.url = url;
  }

  async getList(): Promise<IUser[]> {
    const list: IApiResponse[] = (await axios.get(`${this.url}/users`)).data;

    return list.map(user => {
      return {
        id: user.id,
        name: user.name
      }
    })
  }
}