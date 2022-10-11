import { Box, ButtonBase, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import savedIcon from "../../../assets/images/icons/saved.png";
import downIcon from "../../../assets/images/icons/Down.png";
import circleIcon from "../../../assets/images/icons/circle.png";
import { StoreContext } from "../../../context/StoreProvider";
import "./index.css";

export default function SavedModal() {
  const [countDown, setCountDown] = useState(2);
  const { isCopyModalNotiVisible, setIsCopyModalNotiVisible } =
    useContext(StoreContext);

  useEffect(() => {
    const getCountDown = setInterval(() => {
      console.log(
        "🚀 ~ file: SavedModal.jsx ~ line 16 ~ getCountDown ~ countDown",
        countDown
      );
      if (countDown == 0) {
        setIsCopyModalNotiVisible(!isCopyModalNotiVisible);
        return;
      } else {
        setCountDown((countDown) => countDown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(getCountDown);
    };
  }, [isCopyModalNotiVisible, countDown]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#00000078",
        position: "fixed",
        left: "0",
        bottom: "0",
      }}
    >
      <Box
        className={
          isCopyModalNotiVisible
            ? "modal__save__active"
            : "modal__save__inactive"
        }
        sx={{
          width: "100%",
          height: "280px",
          position: "fixed",
          left: 0,
          bottom: "-280px",
          borderRadius: "16px 16px 0 0",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
          transition: "1s ease-in-out",
        }}
      >
        <ButtonBase onClick={() => setIsCopyModalNotiVisible(false)}>
          <Box component={"img"} src={downIcon} alt="down icon" />
        </ButtonBase>
        <Box component={"img"} src={savedIcon} alt="save icon" />
        <Typography
          component={"p"}
          sx={{ fontSize: "22px", fontWeight: "bold" }}
        >
          Saved to clipboard
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="circle__icon"
            sx={{ position: "absolute", left: "0", top: "0" }}
            component={"img"}
            src={circleIcon}
            alt="circle icon"
          />
          <Typography component={"p"} sx={{ color: "#FF0366" }}>
            {countDown}s
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
