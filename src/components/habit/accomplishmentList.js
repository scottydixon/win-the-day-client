import React from "react";
import { List } from "@mui/material";
import AccomplishmentItem from "./AccomplishmentItem";

function AccomplishmentList({ accomplishments }) {
  return (
    <List>
      {accomplishments.map((accomplishment) => (
        <AccomplishmentItem
          key={accomplishment.id}
          accomplishment={accomplishment}
        />
      ))}
    </List>
  );
}

export default AccomplishmentList;
