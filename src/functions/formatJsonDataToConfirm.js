import useGetJsonFile from "../hooks/useGetJsonFile";

export default function formatJsonDataToConfirm(baseData, jsonData, correctWord) {
    const size = 4;
    const res = [];
    let correctWordIndex = 0;
    for (let i = 0; i < jsonData.length; i += size) {
        const test = baseData.sort(() => 0.5 - Math.random())
        const tempData = test.slice(0, 2);
        tempData.push(correctWord[correctWordIndex].name)
        res.push({
            index: correctWord[correctWordIndex].index,
            data: [
                tempData.sort((a, b) => 0.5 - Math.random())
            ]
        })
        correctWordIndex++;
    }
    return res;
}