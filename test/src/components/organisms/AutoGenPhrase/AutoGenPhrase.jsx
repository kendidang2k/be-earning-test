import { Box } from "@mui/material";
import React, { useCallback, useContext } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import formatJsonData from "../../../functions/formatJsonData";
import formatJsonDataToConfirm from "../../../functions/formatJsonDataToConfirm";
import useGetJsonFile from "../../../hooks/useGetJsonFile";
import ActionModal from "../../molecules/ActionModal/ActionModal";
import CopyAction from "../../molecules/CopyAction/CopyAction";
import SavedModal from "../../molecules/SavedModal/SavedModal";
import PhraseBlock from "../PhraseBlock/PhraseBlock";

export default function AutoGenPhrase() {
  const jsonData = useGetJsonFile();
  const phraseData = formatJsonData(jsonData);
  const {
    isCopyModalNotiVisible,
    setConfirmPhraseVisible,
    setGenPhraseVisible,
  } = useContext(StoreContext);

  const handleShowConfirm = useCallback(() => {
    setConfirmPhraseVisible(true);
    setGenPhraseVisible(false);
  }, []);

  return (
    <Box>
      <PhraseBlock title={"Auto Gen Seed Phrase?"} pickPhrase={phraseData} />
      <CopyAction />
      <ActionModal
        title={"How does this work?"}
        buttonAction={"Next"}
        buttonEvent={handleShowConfirm}
      />
      {isCopyModalNotiVisible && <SavedModal />}
    </Box>
  );
}
