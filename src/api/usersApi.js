import axios from "./axiosSetup";

const usersApi = {
  // Users API
  getUser: async () => {
    try {
      const response = await axios.get(
        "https://win-the-day-server.vercel.app/api/users"
      );
      return response.data;
    } catch (error) {
      console.error("Error getting user:", error);
      throw error;
    }
  },
  updateUser: async (userData) => {
    try {
      const response = await axios.put(
        "https://win-the-day-server.vercel.app/api/users",
        userData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },
  deleteUser: async () => {
    try {
      const response = await axios.delete(
        "https://win-the-day-server.vercel.app/api/users"
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },
};

export default usersApi;
