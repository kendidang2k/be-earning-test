import {
  Box,
  ButtonBase,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import successIcon from "../../../assets/images/icons/Vector.png";
import rightIcon from "../../../assets/images/icons/right.png";
import { StoreContext } from "../../../context/StoreProvider";
import "./index.css";

const resiltArray = [true, true, true];

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
  const { isButtonLoading, isSuccessModalVisible, arrayPhrase } =
    useContext(StoreContext);
  const [rules, setRules] = useState([false, false, false]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChange = (index, checked) => {
    const updatedRules = [...rules];
    updatedRules[index] = checked;
    setRules(updatedRules);
    if (JSON.stringify(updatedRules) == JSON.stringify(resiltArray)) {
      setIsButtonActive(true);
    }
  };

  return (
    <Box
      className={isSuccessModalVisible ? "modal__success" : ""}
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
        borderRadius: "16px 16px 0 0",
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
              width: "100%",
              height: "auto",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component={"img"}
              src={successIcon}
              alt="success icon"
              sx={{ marginBottom: "25px" }}
            />
            <Typography
              component={"p"}
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "25px",
              }}
            >
              {title}
            </Typography>
            <Box>
              {modalSuccessContent.map((item, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "15px",
                    }}
                    key={index}
                  >
                    <Checkbox
                      checked={rules[index]}
                      onChange={(event) =>
                        handleChange(index, event.target.checked)
                      }
                      sx={{ padding: "0 10px" }}
                    />
                    <Box>
                      <Typography
                        component={"p"}
                        sx={{ fontSize: "15px", textAlign: "justify" }}
                      >
                        {item.content}
                      </Typography>
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
          className={isButtonActive ? "" : "button__inactive"}
          disabled={
            isButtonLoading || arrayPhrase.length == 0 || !isButtonActive
              ? true
              : false
          }
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
