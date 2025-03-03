import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tradexabackend.onrender.com", // Backend API URL
  withCredentials: true, // Send cookies with requests
});

export default axiosInstance;
