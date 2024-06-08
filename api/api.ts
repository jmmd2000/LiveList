import axios from "axios";
import { InitialUserData, User } from "~/types";

const API_URL = "http://192.168.1.5:3000";

export const createUserIfNotExist = async (userData: InitialUserData): Promise<any> => {
  // console.log("userData", userData);

  try {
    const response = await axios.post(`${API_URL}/users/auth`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("response", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error; // Re-throw the error after logging it
  }
};

export const getUserByID = async (id: string): Promise<User> => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error; // Re-throw the error after logging it
  }
};
