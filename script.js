let raisedAmount = 0;

function donate(amount) {
    raisedAmount += amount;
    document.getElementById('raised-amount').textContent = `$${raisedAmount}`;
}
