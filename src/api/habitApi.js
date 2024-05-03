import axios from "./axiosSetup"; // Using the configured Axios instance

const habitApi = {
  // Habits API
  fetchHabits: async () => {
    try {
      const response = await axios.get("/habits");
      // Ensure the response contains an array for habits; if not, provide an empty array
      if (!Array.isArray(response.data.habits)) {
        console.error(
          "Expected habits to be an array, received:",
          response.data.habits
        );
        return { habits: [] };
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching habits:", error);
      // Return a default structure with an empty array to prevent frontend errors
      return { habits: [] };
    }
  },
  fetchHabit: async (id) => {
    try {
      const response = await axios.get(`/habits/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching habit ${id}:`, error);
      throw error;
    }
  },
  createHabit: async (habitData) => {
    try {
      const response = await axios.post("/habits", habitData);
      return response.data;
    } catch (error) {
      console.error("Error creating habit:", error);
      throw error;
    }
  },
  updateHabit: async (id, habitData) => {
    try {
      const response = await axios.put(`/habits/${id}`, habitData);
      return response.data;
    } catch (error) {
      console.error(`Error updating habit ${id}:`, error);
      throw error;
    }
  },
  deleteHabit: async (id) => {
    try {
      const response = await axios.delete(`/habits/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting habit ${id}:`, error);
      throw error;
    }
  },
};

export default habitApi;
