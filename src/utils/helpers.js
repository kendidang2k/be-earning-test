export const formatJsonData = (jsonData) => {
    const res = []
    const test = jsonData.sort(() => 0.5 - Math.random())
    const tempData = test.slice(0, 24);
    tempData.map((item, index) => {
        res.push({
            name: item, index: index + 1
        })
    })
    return res;
}

export const formatJsonDataToConfirm = (jsonData, correctWord) => {
    const size = 4;
    const res = [];
    let correctWordIndex = 0;
    for (let i = 0; i < jsonData.length; i += size) {
        const test = jsonData.sort(() => 0.5 - Math.random())
        const tempData = test.slice(0, 2);
        tempData.push(correctWord[correctWordIndex])
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

export const sort = (arrayData) => {
    const sortedArr = arrayData.sort((a, b) => {
        const firstNumberArr = a.toString().split('');
        const secondNumberArr = b.toString().split('');
        for (let i = 0; i < firstNumberArr.length; i++) {
            const firstNumber = +firstNumberArr[i] || 0;
            const secondNumber = +secondNumberArr[i] || 0;
            if (firstNumber - secondNumber !== 0) return secondNumber - firstNumber;
        }
        return 0;
    });
    return sortedArr.join('');
}
