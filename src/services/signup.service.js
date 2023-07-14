import axios from "axios";

const baseUrl = "https://cinemavault-api.onrender.com";

export const initAccount = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/user/create-user`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
