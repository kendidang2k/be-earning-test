import { Box, ButtonBase, Typography } from "@mui/material";
import React, { useContext } from "react";
import backIcon from "../../assets/images/icons/back.png";
import AutoGenPhrase from "../../components/organisms/AutoGenPhrase/AutoGenPhrase";
import ConfirmSeedPhrase from "../../components/organisms/ConfirmSeedPhrase/ConfirmSeedPhrase";
import { StoreContext } from "../../context/StoreProvider";

export default function CreateWallet() {
  const { isGenPhraseVisible, isConfirmPhraseVisible } =
    useContext(StoreContext);

  return (
    <Box sx={{ padding: "10px" }}>
      <ButtonBase sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component={"img"}
          src={backIcon}
          alt="back icon"
          sx={{ marginRight: "10px" }}
        />
        <Typography component={"p"} sx={{ fontSize: "17px" }}>
          Create New Wallet
        </Typography>
      </ButtonBase>
      {isGenPhraseVisible && <AutoGenPhrase />}
      {isConfirmPhraseVisible && <ConfirmSeedPhrase />}
    </Box>
  );
}
