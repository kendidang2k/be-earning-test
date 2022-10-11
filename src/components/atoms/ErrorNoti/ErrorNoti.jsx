import { Box, Typography } from "@mui/material";
import React from "react";
import errorIcon from "../../../assets/images/icons/exclamation-triangle.png";

export default function ErrorNoti({ message }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <Box
        component={"img"}
        src={errorIcon}
        alt="error icon"
        sx={{ marginRight: "5px" }}
      />
      <Typography
        component={"p"}
        sx={{
          fontSize: "13px",
          lineHeight: "10px",
          color: "#FF0366",
          fontWeight: "bold",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
