import { PRODUCTS_ENDPOINT } from "../config";
import { LOAD_PRODUCTS_LIMIT } from "../constants";
import { ProductRootObject } from "../types";


export const getProducts = async (pageNum: number): Promise<ProductRootObject | null> => {
  try {
    const response = await fetch(`${PRODUCTS_ENDPOINT}limit=${LOAD_PRODUCTS_LIMIT}&skip=${(pageNum - 1) * LOAD_PRODUCTS_LIMIT}`)
    const responseJson = await response.json();
    if (!responseJson) return null;
    return responseJson;
  } catch (error) {
    console.error("Products API Error response: ", error);
    return null;
  }
}