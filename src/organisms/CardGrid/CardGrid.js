import { Grid } from "@mui/material";
import React from "react";

const CardGrid = (props) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {props.children}
    </Grid>
  );
};

export default CardGrid;
