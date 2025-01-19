import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8000',
    // baseURL: 'http://api-react-vite.test',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    withXSRFToken: true
})