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
          padding: '0.5rem',
          gap: '1rem',
          borderRadius: '0.5rem'
        }}
      >
        <Typography variant="h6" sx={{
          color: "#fff"
        }}>Sign up to start chatting</Typography>
        <Button
          sx={{
            backgroundColor: "#fff",
            fontWeight: '700',
            padding: '0.5rem 1rem 0.5rem 1rem',
            borderRadius: '2rem',
            letterSpacing: '0.5px',
            fontSize: '1rem',
            paddingTop: '14px'
          }}
        >
          Create free account
        </Button>
      </Box>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: '1.5rem 0 1.5rem 0'
      }}>
        <Typography variant="h5" sx={{ fontWeight: '800', letterSpacing: '0.5px'}}>Connect with students studying at ASU</Typography>
      </Box>
    </>
  );
};

export default Banner;
