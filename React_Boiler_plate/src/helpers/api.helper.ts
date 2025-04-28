import { API_BASE_URL } from "@/services/config";
import axios from "axios";

const ApiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

ApiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // toast.error("Request Failed");
    return Promise.reject(error);
  },
);

ApiInstance.interceptors.response.use(
  (response) => {
    if (!response.data) {
      //   toast.error("No data received");
      return Promise.reject(new Error("No data received"));
    }
    return response;
  },
  (error) => {
    // !error.response
    //   ? toast.error("Network Error: Please check your connection")
    //   : toast.error("Something went wrong");
    return Promise.reject(error);
  },
);

export default ApiInstance;
