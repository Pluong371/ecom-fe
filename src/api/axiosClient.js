import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.102.100:8080/api/v1/",
  // baseURL: "http://localhost:3001",
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    //handle response
    return response;
  },
  (error) => {
 
    if(error.response.status === 401){
      localStorage.removeItem("token");
      window.location.href = "/sign-in";
    }
    if(error.response.status === 200){
      return error.response;
    }
    else if(error.response.status === 400){
      return error.response;
    }
  
    return error;
  }
);
export default axiosClient;
