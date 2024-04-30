import React from "react";
import { ListItem, ListItemText } from "@mui/material";

function AccomplishmentItem({ accomplishment }) {
  return (
    <ListItem>
      <ListItemText
        primary={`Accomplishment on ${accomplishment.date}`}
        secondary={accomplishment.notes}
      />
    </ListItem>
  );
}

export default AccomplishmentItem;
