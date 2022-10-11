import { Box, Checkbox } from "@mui/material";
import React from "react";

export default function CheckBox({ value }) {
  return (
    <Checkbox
      //   checked={rules[index]}
      sx={{ padding: "0 10px" }}
      //   name={`rule${index + 1}`}
      // icon={<CircleUnchecked />}
      // checkedIcon={<CircleCheckedFilled />}
    />
  );
}
