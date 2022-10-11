import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Phrase from "../../atoms/Phrase/Phrase";
import ConfirmPhraseItem from "../../molecules/PhraseItem/ConfirmPhraseItem";

export default function PhraseBlock({ title, pickPhrase, confirmPhrase }) {
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
        {confirmPhrase && <Typography component={"p"}>2/6</Typography>}
      </Box>
      <Grid container spacing={2} sx={{ padding: "10px 0" }}>
        {pickPhrase &&
          pickPhrase.map((pickPhraseItem, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Phrase index={index} phraseTitle={pickPhraseItem.name} />
              </Grid>
            );
          })}
      </Grid>
      {confirmPhrase &&
        confirmPhrase.map((confirmPhraseItem, index) => {
          return (
            <Box sx={{ padding: "10px 0" }} key={index}>
              <ConfirmPhraseItem
                index={index}
                confirmPhraseItems={confirmPhraseItem}
              />
            </Box>
          );
        })}
    </Box>
  );
}
