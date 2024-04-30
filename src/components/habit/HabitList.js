import React from "react";
import List from "@mui/material/List";
import HabitItem from "./HabitItem";

function HabitList({ habits }) {
  return (
    <List>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </List>
  );
}

export default HabitList;
