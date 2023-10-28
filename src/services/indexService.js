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
  },
  async getIndexDataByID(id) {
    try {
      const response = await axios.get('/api/listings.json');
      return response.data.filter(d => d.Id == id).pop();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};