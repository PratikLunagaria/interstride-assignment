import { Box } from "@mui/material";
import React from "react";
import FilterSelect from "../../atoms/FilterSelect/FilterSelect";

const FilterCriteria = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <FilterSelect />
      <FilterSelect />
      <FilterSelect />
    </Box>
  );
};

export default FilterCriteria;
