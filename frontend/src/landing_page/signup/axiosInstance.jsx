import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // Backend API URL
  withCredentials: true, // Send cookies with requests
});

export default axiosInstance;
