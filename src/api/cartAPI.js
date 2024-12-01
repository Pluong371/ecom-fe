import axiosClient from "./axiosClient";
import { GET_CART } from "./end-points";

export const fetchCart = async () => {
    const response = await axiosClient.get(GET_CART);
  return {
    
  }
};