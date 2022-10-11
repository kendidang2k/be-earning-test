import useGetJsonFile from "../hooks/useGetJsonFile";

export default function formatJsonData(jsonData) {
    const res = []
    const test = jsonData.sort(() => 0.5 - Math.random())
    const tempData = test.slice(0, 24);
    tempData.map((item, index) => {
        res.push({
            name: item, index: index
        })
    })
    return res;
}