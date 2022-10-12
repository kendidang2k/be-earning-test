import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import Button from "../../atoms/Button/Button";
import "./index.css";

export default function ConfirmPhraseItem({ index, confirmPhraseItems }) {
  const { correctNumber, setCorrectNumber } = useContext(StoreContext);
  const handleChange = (event) => {
    if (index == event.target.value) {
      setCorrectNumber(correctNumber + 1);
    }
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        border: "1px solid #D3D7DB",
        padding: "10px 0",
        filter: "drop-shadow(0px 7px 64px rgba(0, 0, 0, 0.07))",
        borderRadius: "6px",
      }}
    >
      <Grid
        item
        xs={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "1px solid #004DFF",
            color: "#004DFF",
          }}
        >
          {index}
        </Box>
      </Grid>
      <Grid item xs={9}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <Grid container>
            {confirmPhraseItems.data[0].map((item, index) => {
              return (
                <Grid
                  className="single__radio__button"
                  item
                  xs={4}
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value={item.index}
                    control={
                      <Radio sx={{ visibility: "hidden", display: "none" }} />
                    }
                    label={item.name}
                  />
                </Grid>
              );
            })}
          </Grid>
        </RadioGroup>
      </Grid>
    </Grid>
  );
}
