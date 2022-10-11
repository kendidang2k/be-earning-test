import { Box } from "@mui/material";
import React, { useCallback, useContext } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import formatJsonData from "../../../functions/formatJsonData";
import formatJsonDataToConfirm from "../../../functions/formatJsonDataToConfirm";
import useGetJsonFile from "../../../hooks/useGetJsonFile";
import ErrorNoti from "../../atoms/ErrorNoti/ErrorNoti";
import ActionModal from "../../molecules/ActionModal/ActionModal";
import SavedModal from "../../molecules/SavedModal/SavedModal";
import PhraseBlock from "../PhraseBlock/PhraseBlock";

const errorMessage = "Wrong seed phrases. Please try again!";

export default function ConfirmSeedPhrase() {
  const jsonData = useGetJsonFile();
  const phraseData = formatJsonData(jsonData);
  const confirmData = formatJsonDataToConfirm(phraseData.slice(0, 18));
  const {
    isCopyModalNotiVisible,
    isErrorMessVisible,
    setErrorMessVisible,
    isButtonLoading,
    setIsButtonLoading,
  } = useContext(StoreContext);

  const submitPharse = useCallback(() => {
    setIsButtonLoading(true);
    setTimeout(() => {
      setErrorMessVisible(true);
      setIsButtonLoading(false);
    }, 2000);
  }, []);

  return (
    <Box>
      {confirmData && (
        <PhraseBlock
          title={"Confirm your seed phrase?"}
          confirmPhrase={confirmData}
        />
      )}
      {isErrorMessVisible && <ErrorNoti message={errorMessage} />}
      <ActionModal
        title={"How does this work?"}
        buttonAction={"Submit"}
        buttonEvent={submitPharse}
      />
      {isCopyModalNotiVisible && <SavedModal />}
    </Box>
  );
}
