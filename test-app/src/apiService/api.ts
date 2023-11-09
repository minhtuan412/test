import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchDataFromAPI = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_URL}/endpoint`);
    return response.data;
  } catch (error) {
    throw error;
  }
};