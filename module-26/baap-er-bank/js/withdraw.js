// 1. add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //2. get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    // last step: clear the withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }


    // step-3: get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    // step-5: get the total balance;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank a ato taka nai');
        return;
    }

    // step-4: add numbers to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    // last step: clear the withdraw field
    withdrawField.value = '';
})