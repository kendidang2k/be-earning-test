import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import Button from "../../atoms/Button/Button";

export default function ConfirmPhraseItem({ index, confirmPhraseItems }) {
  const { confirmArray, setConfirmArray } = useContext(StoreContext);
  const handleAddToArray = (item) => {
    if (confirmArray.includes(item)) {
      confirmArray.slice(confirmArray.indexOf(item));
    } else {
      setConfirmArray((confirmArray) => [...confirmArray, item]);
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
      {confirmPhraseItems.data[0].map((item, index) => {
        return (
          <Grid
            item
            xs={3}
            key={index}
            onClick={() => handleAddToArray(item)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button text={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
