document.getElementById('players-budget').addEventListener('click', function () {
    const perPlayerBudgetField = getInputFieldValueById('per-player-amount');

    const newPlayerExpenseTotal = perPlayerBudgetField * players.length;
    setTextElementValueById('player-expense', newPlayerExpenseTotal)
})