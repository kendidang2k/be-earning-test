import React, { createContext, useState } from 'react'

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
    const [isModalNotiVisible, setIsModalNotiVisible] = useState(false)
    const [isCopyModalNotiVisible, setIsCopyModalNotiVisible] = useState(false)
    const [isConfirmPhraseVisible, setConfirmPhraseVisible] = useState(false)
    const [isErrorMessVisible, setErrorMessVisible] = useState(false)
    const [isGenPhraseVisible, setGenPhraseVisible] = useState(true)
    const [isButtonLoading, setIsButtonLoading] = useState(false)


    return (
        <StoreContext.Provider value={{
            isModalNotiVisible, setIsModalNotiVisible,
            isCopyModalNotiVisible, setIsCopyModalNotiVisible,
            isConfirmPhraseVisible, setConfirmPhraseVisible,
            isGenPhraseVisible, setGenPhraseVisible,
            isErrorMessVisible, setErrorMessVisible,
            isButtonLoading, setIsButtonLoading
        }}>
            {children}
        </StoreContext.Provider>
    )
}
