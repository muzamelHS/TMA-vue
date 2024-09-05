import axios from 'axios'
import { API_URL, AUTH_HEADER } from '@/utils/constants'

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: AUTH_HEADER
})

export default axiosInstance
