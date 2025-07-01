import axios from "axios";
import { API_BASE_URL } from "./constants";

export const getRecipes = async (query = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes${query}`);
    const { data } = response;

    return data.value;
  } catch (error) {
    throw error;
  }
};

export const addRecipe = async (recipe) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/recipes`, recipe);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/recipes/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
