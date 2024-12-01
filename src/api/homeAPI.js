import axiosClient from "./axiosClient";
import { NEW_ARRIVALS, BESTSELLER, ADD_TO_CART } from "./end-points";

export const fetchNewArrivals = async () => {
  
  const response = await axiosClient.get(NEW_ARRIVALS);
  console.log(response);
    const data = response.data.map((item) => {
      const cleanedString = item.product.image.replace(/[\[\]"]/g, "");
      const imageProduct = cleanedString.split(",");
      return {
        id: item.product.id,
        name: item.translation.name,
        image: imageProduct[1],
        price: item.skus[0].productSKU.price,
        description: item.translation.description,
        rating: item.product.rating,
      };
    });
    return data;

};

export const fetchBestSeller = async () => { 
  
    const response = await axiosClient.get(BESTSELLER);
    const data = response.data.map((item) => {
      const cleanedString = item.product.image.replace(/[\[\]"]/g, "");
      const imageProduct = cleanedString.split(",");
      return {
        id: item.product.id,
        name: item.translation.name,
        image: imageProduct[2],
        price: item.skus[0].productSKU.price,
        description: item.translation.description,
        rating: item.product.rating,
      };
    });
   return data;

}
export const fetchAddToCart = async (data) => {
  
  const response = await axiosClient.post(ADD_TO_CART, data);
  return response;
}
