import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_QVICK_SERVER,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // token.clearTokens();
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;