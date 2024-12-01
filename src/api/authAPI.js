import axiosClient from "./axiosClient";
import { LOGIN, REGISTER, ACTIVE_EMAIL } from "./end-points";

export const loginUser = async (data) => {
    const response = await axiosClient.post(LOGIN, data);
    return response.data;
 
};
export const registerUser = async (data) => {
  const response = await axiosClient.post(REGISTER, data);
  return response.data;
};
export const verifyOtp = async (data) => {
  const response = await axiosClient.post(ACTIVE_EMAIL, data);
 
  return response.data;
  
};

