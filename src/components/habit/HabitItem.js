import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function HabitItem({ habit }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="details">
          <InfoIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={habit.name}
        secondary={`Status: ${habit.isActive ? "Active" : "Inactive"}`}
      />
    </ListItem>
  );
}

export default HabitItem;
