import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Tooltip from "@mui/material/Tooltip";

function HabitItem({ habit, onToggleActive }) {
  return (
    <ListItem>
      <ListItemText
        primary={habit.name}
        secondary={`Status: ${habit.isActive ? "Active" : "Inactive"}`}
      />
      <ListItemSecondaryAction>
        <Tooltip title="Toggle Active Status">
          <IconButton onClick={onToggleActive} edge="end" aria-label="toggle">
            {habit.isActive ? <ToggleOnIcon /> : <ToggleOffIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="View Details">
          <IconButton edge="end" aria-label="details">
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default HabitItem;
