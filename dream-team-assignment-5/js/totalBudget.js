document.getElementById('total-budget').addEventListener('click', function () {
    const playersExpense = getTextElementValueById('player-expense');
    const managerBudget = getInputFieldValueById('manager-budget');
    const coachBudget = getInputFieldValueById('coach-budget');

    const totalBudget = playersExpense + managerBudget + coachBudget;

    setTextElementValueById('total', totalBudget)
})