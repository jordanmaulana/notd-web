import { API_URL } from "@/config/api_url";
import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";

// Create an Axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request and response interceptors
axiosInstance.interceptors.request.use(
  async (config) => {
    // Modify the request configuration if needed
    const sessionId = (await cookies()).get("sessionId")?.value;
    if (sessionId && config.headers) {
      config.headers["session-id"] = `${sessionId}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data if needed

    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
