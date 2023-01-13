// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;



    // last step: clear the deposit field
    depositField.value = '';
})