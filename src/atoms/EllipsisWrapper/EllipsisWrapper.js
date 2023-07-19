import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ExpandButton } from "../ExpandButton/ExpandButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EllipsisWrapper = ({ children, wrapLength = 150 }) => {
  const text = children;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography>
        {expanded ? `${text.slice(0, wrapLength)}...` : text}
      </Typography>
      <ExpandButton
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandButton>
    </Box>
  );
};
export default EllipsisWrapper;
