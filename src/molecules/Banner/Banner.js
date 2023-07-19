import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Typography>Sign up to start chatting</Typography>
        <Button
          sx={{
            backgroundColor: "#fff",
          }}
        >
          Create free account
        </Button>
      </Box>
      <Typography>Connect with students studying at ASU</Typography>
    </>
  );
};

export default Banner;
