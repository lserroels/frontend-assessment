import axios from 'axios';

export default {
  async getIndexData() {
    try {
      const response = await axios.get('/api/listings.json');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};