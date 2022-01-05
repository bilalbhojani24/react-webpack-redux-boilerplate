import axios from 'axios';
import { apiUrlPrefixes } from './environment';

export const instance = axios.create({
  baseURL: apiUrlPrefixes[process.env.REACT_APP_RUN_MODE || 'DEV'],
  timeout: 5000,
  headers: {
    // ALL REQUIRED HEADERS
  },
});
