import { Box } from "@mui/material";
import React, { useCallback, useContext, useMemo } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import useGetJsonFile from "../../../hooks/useGetJsonFile";
import {
  formatJsonData,
  formatJsonDataToConfirm,
} from "../../../utils/helpers";
import ErrorNoti from "../../atoms/ErrorNoti/ErrorNoti";
import ActionModal from "../../molecules/ActionModal/ActionModal";
import SavedModal from "../../molecules/SavedModal/SavedModal";
import PhraseBlock, { DEFAULT_VALUE } from "../PhraseBlock/PhraseBlock";

const errorMessage = "Wrong seed phrases. Please try again!";

export default function ConfirmSeedPhrase() {
  const {
    isCopyModalNotiVisible,
    isErrorMessVisible,
    setErrorMessVisible,
    isButtonLoading,
    setIsButtonLoading,
    isSuccessModalVisible,
    setIsSuccessModalVisible,
    arrayPhrase,
    jsonData,
    confirmStatus,
    setConfirmStatus,
    correctNumber,
  } = useContext(StoreContext);
  // const jsonData = useGetJsonFile();
  const phraseData = useMemo(() => formatJsonData(jsonData), [jsonData]);

  const confirmData = useMemo(
    () => formatJsonDataToConfirm(phraseData, arrayPhrase),
    [jsonData]
  );

  const submitPharse = () => {
    setIsButtonLoading(true);
    if (correctNumber == DEFAULT_VALUE) {
      setTimeout(() => {
        setIsSuccessModalVisible(true);
        setIsButtonLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setErrorMessVisible(true);
        setIsButtonLoading(false);
      }, 2000);
    }
  };

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
      {isSuccessModalVisible && (
        <ActionModal
          title={"Your wallet has been created!"}
          buttonAction={"I understand"}
          isSuccess={true}
        />
      )}
    </Box>
  );
}
