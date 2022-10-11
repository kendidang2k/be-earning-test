import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useGetJsonFile() {
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
        const getJsonData = async () => {
            try {
                const res = await axios.get(`https://metanode.co/json/eng.json`)

                setJsonData(res.data)
            } catch (error) {
                console.log("🚀 ~ file: useGetJsonFile.js ~ line 14 ~ getJsonData ~ error", error)
            }
        }
        getJsonData();
    }, [])


    return jsonData;
}
