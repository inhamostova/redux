import axios from 'axios';
const API_KEY = 'pub_33823cae9a7a4878b154948cfc53bca0';

axios.defaults.baseURL = 'https://newsdata.io/api/1';

export async function getLatestNews() {
  const { data } = await axios.get(`/latest?apikey=${API_KEY}`);
  return data.results;
}
