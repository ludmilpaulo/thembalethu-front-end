import axios from "axios";

const apiUrl = "https://ludmilpaulo.pythonanywhere.com/";

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(apiUrl + endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
