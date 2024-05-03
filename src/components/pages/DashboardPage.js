import React, { useEffect, useState } from "react";
import HabitList from "../habit/HabitList";
import HabitForm from "../habit/HabitForm";
import { Container, Typography, Button } from "@mui/material";
import habitApi from "../../api/habitApi";
import usersApi from "../../api/usersApi";

function DashboardPage() {
  const [habits, setHabits] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userData = await usersApi.getUser();
        setUserName(userData.user.name);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }

      try {
        // Fetch habits data
        const data = await habitApi.fetchHabits();
        if (data && Array.isArray(data.habits)) {
          // Ensure that data.habits is an array
          setHabits(data.habits);
        } else {
          console.error("Expected habits to be an array, received:", data);
          setHabits([]); // Set to empty array if not received as expected
        }
      } catch (error) {
        console.error("Failed to fetch habits:", error);
        setHabits([]); // Set to empty array on error
      }
    };
    fetchData();
  }, []);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleSaveHabit = async (formData) => {
    try {
      console.log("Saving habit:", formData);
      const habitData = { habitName: formData.name }; // Ensure this matches with your backend expected params
      const response = await habitApi.createHabit(habitData);
      console.log("Habit saved successfully:", response);
      if (response.habit) {
        setHabits((prev) => [...prev, response.habit]);
      }
    } catch (error) {
      console.error("Failed to save habit:", error);
    }
  };

  const toggleHabitActive = async (habitId) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        const updatedHabit = { ...habit, isActive: !habit.isActive };
        // Update habit in the backend
        habitApi
          .updateHabit(habitId, { isActive: updatedHabit.isActive })
          .then(() => {
            console.log("Habit status updated successfully.");
          })
          .catch((error) => {
            console.error("Failed to update habit status:", error);
            // Optionally revert the change in UI on failure
            return habit; // Return original habit if update fails
          });
        return updatedHabit;
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, {userName}
      </Typography>
      <Button onClick={toggleForm} variant="contained" color="primary">
        {showForm ? "Close Form" : "Add Habit"}
      </Button>
      {showForm && <HabitForm onSave={handleSaveHabit} />}
      <HabitList habits={habits} onToggleHabitActive={toggleHabitActive} />
    </Container>
  );
}

export default DashboardPage;
