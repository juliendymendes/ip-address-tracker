import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: 'https://geo.ipify.org/api/v2',
  });