import {
  Box,
  ButtonBase,
  Checkbox,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import successIcon from "../../../assets/images/icons/Vector.png";
import rightIcon from "../../../assets/images/icons/right.png";
import { StoreContext } from "../../../context/StoreProvider";

const modalSuccessContent = [
  {
    content:
      "Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.",
  },
  {
    content:
      "Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.",
  },
  {
    content:
      "To keep your backup file safe, you should also keep secret your back up location and secure it.",
  },
];

export default function ActionModal({
  title,
  buttonAction,
  isSuccess,
  buttonEvent,
}) {
  const { isButtonLoading, setIsButtonLoading } = useContext(StoreContext);

  return (
    <Box
      className=""
      sx={{
        width: "100%",
        height: "170px",
        position: "fixed",
        left: 0,
        bottom: 0,
        boxShadow: "0px -7px 64px rgba(0, 0, 0, 0.07)",
        backgroundColor: "#fff",
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {isSuccess ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component={"img"} src={successIcon} alt="success icon" />
            <Typography component={"p"}>
              Your wallet has been created!
            </Typography>
            <Box>
              {modalSuccessContent.map((item, index) => {
                return (
                  <Box sx={{ display: "flex" }} key={index}>
                    <Checkbox
                    // icon={<CircleUnchecked />}
                    // checkedIcon={<CircleCheckedFilled />}
                    />
                    <Box>
                      <Typography component={"p"}>{item.content}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component={"p"}
              sx={{ fontSize: "17px", fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <Box component={"img"} src={rightIcon} alt="right icon" />
          </Box>
        )}
        <ButtonBase
          disabled={isButtonLoading ? true : false}
          onClick={buttonEvent}
          sx={{
            width: "100%",
            backgroundColor: "#004DFF",
            borderRadius: "10px",
            height: "56px",
            fontSize: "17px",
            color: "#fff",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {isButtonLoading ? (
            <Box>
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <Box>{buttonAction}</Box>
          )}
        </ButtonBase>
      </Box>
    </Box>
  );
}
