import axios from "axios";

const baseUrl = "https://cinemavault-api.onrender.com";

export const findMovieById = async (id, token) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { promise: true, notFound: false, response: response.data };
  } catch (error) {
    return {
      promise: false,
      notFound: true,
      message: `Something went wrong. Your session has expired or this movie was not found! Whatever, log in again and try accessing this movie once more. If it is not found, try other content!`,
    };
  }
};

export const findMovieByTitle = async (title, token) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/find-by-name/${title}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { promise: true, notFound: false, response: response.data };
  } catch (error) {
    return {
      promise: false,
      notFound: true,
      message: `Something went wrong. Your session has expired or this movie was not found! Whatever, log in again and try accessing this movie once more. If it is not found, try other content!`,
    };
  }
};

export const findMovieByGenre = async (genre, token) => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/find-by-genre/${genre}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { promise: true, notFound: false, response: response.data };
  } catch (error) {
    return {
      promise: false,
      notFound: true,
      message: `Something went wrong. Your session has expired or this movie was not found! Whatever, log in again and try accessing this movie once more. If it is not found, try other content!`,
    };
  }
};