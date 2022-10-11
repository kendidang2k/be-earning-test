export default function sort(arrayData) {
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
