import axios from "./axiosSetup";

const authApi = {
  async login(email, password) {
    try {
      const response = await axios.post("/login", { email, password });
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  },

  // Updated registerUser function to use a dedicated registration endpoint
  async registerUser(userData) {
    try {
      const response = await axios.post("/users", userData); // Using a dedicated register endpoint
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error; // Maintaining error rethrowing for consistency
    }
  },
};

export default authApi;