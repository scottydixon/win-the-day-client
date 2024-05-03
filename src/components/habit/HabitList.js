import React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import HabitItem from "./HabitItem";

function HabitList({ habits, onToggleHabitActive }) {
  // Include onToggleHabitActive prop
  // Check and handle if habits is not an array
  if (!Array.isArray(habits)) {
    console.error("Habits is not an array:", habits);
    return null; // Or render some fallback UI
  }

  return (
    <List>
      {habits.map((habit) => (
        // Pass onToggleHabitActive down to each HabitItem
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggleActive={() => onToggleHabitActive(habit.id)}
        />
      ))}
    </List>
  );
}

HabitList.propTypes = {
  habits: PropTypes.array,
  onToggleHabitActive: PropTypes.func.isRequired, // Add propTypes for onToggleHabitActive
};

HabitList.defaultProps = {
  habits: [], // Ensures habits is always an array by default
};

export default HabitList;
