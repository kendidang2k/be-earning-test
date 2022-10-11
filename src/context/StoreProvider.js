import React, { createContext, useState } from 'react'

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
    console.log("🚀 ~ file: StoreProvider.js ~ line 15 ~ StoreProvider ~ confirmArray", confirmArray)

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
            confirmArray, setConfirmArray
        }}>
            {children}
        </StoreContext.Provider>
    )
}
