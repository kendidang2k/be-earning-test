import React, { createContext, useState } from 'react'
import useGetJsonFile from '../hooks/useGetJsonFile';

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
    const [isModalNotiVisible, setIsModalNotiVisible] = useState(false)
    const [isCopyModalNotiVisible, setIsCopyModalNotiVisible] = useState(false)
    const [isConfirmPhraseVisible, setConfirmPhraseVisible] = useState(false)
    const [isErrorMessVisible, setErrorMessVisible] = useState(false)
    const [isGenPhraseVisible, setGenPhraseVisible] = useState(true)
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)
    const [arrayPhrase, setArrayPhrase] = useState([])
    const [confirmArray, setConfirmArray] = useState([])
    const [correctNumber, setCorrectNumber] = useState(0);
    const [confirmStatus, setConfirmStatus] = useState(false);
    const jsonData = useGetJsonFile();

    return (
        <StoreContext.Provider value={{
            isModalNotiVisible, setIsModalNotiVisible,
            isCopyModalNotiVisible, setIsCopyModalNotiVisible,
            isConfirmPhraseVisible, setConfirmPhraseVisible,
            isGenPhraseVisible, setGenPhraseVisible,
            isErrorMessVisible, setErrorMessVisible,
            isButtonLoading, setIsButtonLoading,
            isSuccessModalVisible, setIsSuccessModalVisible,
            arrayPhrase, setArrayPhrase,
            confirmArray, setConfirmArray,
            correctNumber, setCorrectNumber,
            jsonData,
            confirmStatus, setConfirmStatus
        }}>
            {children}
        </StoreContext.Provider>
    )
}
