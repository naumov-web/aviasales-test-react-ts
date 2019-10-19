import axios from 'axios';
import { API_BASE } from './../../config/api';

export const getSearchIdRequest = () => axios.get(`${API_BASE}/search`);
export const getTicketsRequest = (search_id : string) => 
  axios.get(`${API_BASE}/tickets?searchId=${search_id}`);