import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function HabitDetails({ habit }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {habit.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Status: {habit.isActive ? "Active" : "Inactive"}
        </Typography>
        <Typography variant="body2">
          Details about the habit go here. You can include more descriptive text
          or statistics here.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default HabitDetails;
