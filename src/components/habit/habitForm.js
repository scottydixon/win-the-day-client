import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function HabitForm({ habit, onSave }) {
  const [formData, setFormData] = useState({
    name: habit ? habit.name : "",
    isActive: habit ? habit.isActive : false,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Habit Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="isActive"
        label="Active"
        type="checkbox"
        id="isActive"
        checked={formData.isActive}
        onChange={handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Save Habit
      </Button>
    </Box>
  );
}

export default HabitForm;
