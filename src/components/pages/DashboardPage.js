import React, { useEffect, useState } from "react";
import HabitList from "../habit/HabitList";
import { Container, Typography } from "@mui/material";
import habitApi from "../../api/habitApi"; // Corrected import

function DashboardPage() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const getHabits = async () => {
      try {
        const data = await habitApi.fetchHabits(); // Corrected usage
        setHabits(data);
      } catch (error) {
        console.error("Failed to fetch habits:", error);
      }
    };
    getHabits();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, [User Name]
      </Typography>
      <HabitList habits={habits} />
    </Container>
  );
}

export default DashboardPage;
