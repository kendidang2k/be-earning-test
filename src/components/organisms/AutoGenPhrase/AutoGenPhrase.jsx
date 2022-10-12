import { Box } from "@mui/material";
import React, { useCallback, useContext, useMemo } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import useGetJsonFile from "../../../hooks/useGetJsonFile";
import { formatJsonData } from "../../../utils/helpers";
import ActionModal from "../../molecules/ActionModal/ActionModal";
import CopyAction from "../../molecules/CopyAction/CopyAction";
import SavedModal from "../../molecules/SavedModal/SavedModal";
import PhraseBlock from "../PhraseBlock/PhraseBlock";

export default function AutoGenPhrase() {
  const {
    isCopyModalNotiVisible,
    setConfirmPhraseVisible,
    setGenPhraseVisible,
    jsonData,
  } = useContext(StoreContext);
  const phraseData = useMemo(() => formatJsonData(jsonData), [jsonData]);

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
