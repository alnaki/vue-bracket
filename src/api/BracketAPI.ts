import IBracket from '@/models/IBracket'
import axios from 'axios';

export default function bracketAPI() {
  return {
    async get(id: string): Promise<IBracket> {
      const response = await axios.get<IBracket>('/bracket/' + id);
      return response.data;
    }
  };
}