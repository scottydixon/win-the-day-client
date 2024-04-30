import axios from "./axiosSetup"; // Using the configured Axios instance

const habitApi = {
  // Habits API
  fetchHabits: async () => {
    try {
      const response = await axios.get("/habits");
      return response.data;
    } catch (error) {
      console.error("Error fetching habits:", error);
      throw error;
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

  // Users API
  getUser: async () => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error getting user:", error);
      throw error;
    }
  },
  updateUser: async (userData) => {
    try {
      const response = await axios.put("/users", userData);
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },
  deleteUser: async () => {
    try {
      const response = await axios.delete("/users");
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },

  // Tasks API
  createTask: async (taskData) => {
    try {
      const response = await axios.post("/tasks", taskData);
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  },
  getTasks: async () => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },
  updateTask: async (id, taskData) => {
    try {
      const response = await axios.put(`/tasks/${id}`, taskData);
      return response.data;
    } catch (error) {
      console.error(`Error updating task ${id}:`, error);
      throw error;
    }
  },
  deleteTask: async (id) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting task ${id}:`, error);
      throw error;
    }
  },
};

export default habitApi;
