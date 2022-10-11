import useGetJsonFile from "../hooks/useGetJsonFile";

export default function formatJsonData(jsonData) {
    const tempData = []
    const res = []
    jsonData.map(item => {
        if (!tempData.includes(item)) {
            tempData.push(item)
        }
    })

    tempData.slice(0, 24).map((item, index) => {
        res.push({
            name: item, index: index
        })
    })
    return res;
}