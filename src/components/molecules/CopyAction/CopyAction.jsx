import { Box, ButtonBase, Typography } from "@mui/material";
import React, { useContext } from "react";
import copyIcon from "../../../assets/images/icons/copy-icon.png";
import { StoreContext } from "../../../context/StoreProvider";
import formatJsonData from "../../../functions/formatJsonData";
import useGetJsonFile from "../../../hooks/useGetJsonFile";

export default function CopyAction() {
  const { isCopyModalNotiVisible, setIsCopyModalNotiVisible, setArrayPhrase } =
    useContext(StoreContext);

  const wordData = useGetJsonFile();
  const temp = formatJsonData(wordData);

  const getCorrect = (jsonData) => {
    const res = [];
    const test = jsonData.sort(() => 0.5 - Math.random());
    const tempData = test.slice(0, 6);

    tempData.map((item, index) => {
      res.push(item);
    });
    return res;
  };

  const saveWords = () => {
    const temp2 = [];
    const temp3 = [];
    const correctWord = getCorrect(temp);
    correctWord.map((item, index) => {
      temp2.push(item.name);
      temp3.push(item);
    });
    setArrayPhrase(temp3);
    localStorage.setItem("phrase", temp2.join(" "));
    navigator.clipboard.writeText(temp2.join(" "));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography component={"p"}>
        Tap to Copy or Carefully write down your seed phrase and store it in a
        safe place
      </Typography>
      <ButtonBase
        onClick={() => {
          setIsCopyModalNotiVisible(!isCopyModalNotiVisible);
          saveWords();
        }}
      >
        <Box component={"img"} src={copyIcon} alt="copy icon" />
      </ButtonBase>
    </Box>
  );
}
