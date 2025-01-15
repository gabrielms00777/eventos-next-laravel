import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    // baseURL: 'http://api-react-vite.test',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    withXSRFToken: true
})