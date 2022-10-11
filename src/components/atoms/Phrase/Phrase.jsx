import { Box, Typography } from "@mui/material";
import React from "react";

export default function Phrase({ index, phraseTitle }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "6px",
        backgroundColor: "#fff",
        boxShadow: "0px 7px 32px rgba(0, 0, 0, 0.07)",
        padding: "6px 8px",
      }}
    >
      <Box
        sx={{
          width: "20px",
          height: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "#BBCFFB",
          color: "#004DFF",
          marginRight: "8px",
          fontSize: "11px",
          lineHeight: "12px",
        }}
      >
        {index}
      </Box>
      <Typography
        component={"p"}
        sx={{ fontSize: "15px", textTransform: "capitalize" }}
      >
        {phraseTitle}
      </Typography>
    </Box>
  );
}
