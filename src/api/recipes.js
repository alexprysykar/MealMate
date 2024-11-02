import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes`);
    return response.data;
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
