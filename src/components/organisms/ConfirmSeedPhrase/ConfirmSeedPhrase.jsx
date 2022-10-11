import { Box } from "@mui/material";
import React, { useCallback, useContext, useMemo } from "react";
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
  const {
    isCopyModalNotiVisible,
    isErrorMessVisible,
    setErrorMessVisible,
    isButtonLoading,
    setIsButtonLoading,
    isSuccessModalVisible,
    arrayPhrase,
  } = useContext(StoreContext);
  const jsonData = useGetJsonFile();
  const phraseData = formatJsonData(jsonData);

  const confirmData = useMemo(
    () => formatJsonDataToConfirm(jsonData, phraseData, arrayPhrase),
    [jsonData]
  );

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
