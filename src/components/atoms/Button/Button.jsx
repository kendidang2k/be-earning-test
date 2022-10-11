import { ButtonBase } from "@mui/material";
import React, { useState } from "react";
import "./index.css";

export default function Button({ text }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <ButtonBase
      className={isActive ? "button__active" : ""}
      onClick={() => setIsActive(!isActive)}
      sx={{
        textTransform: "capitalize",
        padding: "5px 10px",
        borderRadius: "6px",
      }}
    >
      {text}
    </ButtonBase>
  );
}
