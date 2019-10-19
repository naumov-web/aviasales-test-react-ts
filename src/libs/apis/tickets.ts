import axios from 'axios';
import { API_BASE } from './../../config/api';

export const getSearchId = () => axios.get(`${API_BASE}/search`);