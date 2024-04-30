import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function AccomplishmentForm({ accomplishment, onSave }) {
  const [formData, setFormData] = useState({
    date: accomplishment ? accomplishment.date : "",
    notes: accomplishment ? accomplishment.notes : "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
        id="date"
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="notes"
        label="Notes"
        name="notes"
        autoComplete="notes"
        multiline
        rows={4}
        value={formData.notes}
        onChange={handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Save Accomplishment
      </Button>
    </Box>
  );
}

export default AccomplishmentForm;
