import axios from "axios";

const baseUrl = "https://cinemavault-api.onrender.com";

export const initSession = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/user/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
