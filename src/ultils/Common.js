export function formatDateTime(input) {
    const year = input.getFullYear();
    const month = String(input.getMonth() + 1).padStart(2, '0');
    const date = String(input.getDate()).padStart(2, '0');
    const hours = String(input.getHours()).padStart(2, '0');
    const minutes = String(input.getMinutes()).padStart(2, '0');
    const seconds = String(input.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

export function getName(arr, id) {
    let result = arr.find((item) => item.id == id);
    if (result === undefined)
        return;
    else
        return result.name;
}

export function getOperator(arr, id) {
    let result = arr.find((item) => item.id == id);
    debugger;
    if (result === undefined)
        return;
    else
        return result.operator;
}

export function getMoneyInWallet(arrTrans, arrWallet, arrType, id) {
    let newArr = arrTrans.filter((item) => item.wallet_id == id);
    let wallet = arrWallet.find(item => item.id == id);
    let sum = wallet.startAmount;
    if (newArr.length > 0) {

        newArr.forEach(element => {
            let type = arrType.find(item => item.id == element.type);
            switch (type.operator) {
                case 'subtraction':
                    sum -= element.amount;
                    break;
                case 'summation':
                    sum += element.amount;
                    break;
                default:
            }
        });
    }
    return sum.toLocaleString();
}
