import { Box, Checkbox } from "@mui/material";
import React, { useState } from "react";

export default function CheckBox({ value }) {
  const [rules, setRules] = useState(false);

  const handleChange = (event) => {
    setRules(event.target.checked);
  };

  return (
    <Checkbox
      checked={rules[0]}
      onChange={handleChange}
      sx={{ padding: "0 10px" }}
    />
  );
}
