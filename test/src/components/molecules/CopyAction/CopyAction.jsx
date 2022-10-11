import { Box, ButtonBase, Typography } from "@mui/material";
import React, { useContext } from "react";
import copyIcon from "../../../assets/images/icons/copy-icon.png";
import { StoreContext } from "../../../context/StoreProvider";

export default function CopyAction() {
  const { isCopyModalNotiVisible, setIsCopyModalNotiVisible } =
    useContext(StoreContext);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography component={"p"}>
        Tap to Copy or Carefully write down your seed phrase and store it in a
        safe place
      </Typography>
      <ButtonBase
        onClick={() => setIsCopyModalNotiVisible(!isCopyModalNotiVisible)}
      >
        <Box component={"img"} src={copyIcon} alt="copy icon" />
      </ButtonBase>
    </Box>
  );
}
