import useGetJsonFile from "../hooks/useGetJsonFile";

export default function formatJsonDataToConfirm(jsonData, correctWord) {
    const size = 3;
    const res = []
    for (let i = 0; i < jsonData.length; i += size) {
        res.push({
            data: [
                jsonData.slice(i, i + size)
            ]
        })
    }
    return res;
}