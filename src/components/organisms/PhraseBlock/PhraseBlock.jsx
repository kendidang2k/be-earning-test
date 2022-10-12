import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import Phrase from "../../atoms/Phrase/Phrase";
import ConfirmPhraseItem from "../../molecules/PhraseItem/ConfirmPhraseItem";
import "./index.css";

export const DEFAULT_VALUE = 6;

export default function PhraseBlock({ title, pickPhrase, confirmPhrase }) {
  const { confirmArray, arrayPhrase, correctNumber, setConfirmStatus } =
    useContext(StoreContext);

  return (
    <Box sx={{ padding: "20px 0" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component={"p"} sx={{ fontSize: "17px", color: "#004DFF" }}>
          {title}
        </Typography>
        {confirmPhrase && (
          <Typography
            component={"p"}
            sx={{ color: "#f10000" }}
            className={correctNumber == DEFAULT_VALUE ? "is__correct" : ""}
          >
            {correctNumber}/{DEFAULT_VALUE}
          </Typography>
        )}
      </Box>
      <Grid container spacing={2} sx={{ padding: "10px 0" }}>
        {pickPhrase &&
          pickPhrase.map((pickPhraseItem, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Phrase
                  index={pickPhraseItem.index}
                  phraseTitle={pickPhraseItem.name}
                />
              </Grid>
            );
          })}
      </Grid>
      {confirmPhrase &&
        confirmPhrase.map((confirmPhraseItem, index) => {
          return (
            <Box sx={{ padding: "10px 0" }} key={index}>
              <ConfirmPhraseItem
                index={confirmPhraseItem.index}
                confirmPhraseItems={confirmPhraseItem}
              />
            </Box>
          );
        })}
    </Box>
  );
}
