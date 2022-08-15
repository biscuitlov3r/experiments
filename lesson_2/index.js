function giveMoney(country, amount, superrufunc, supernrfunc) {
    if (country == "Russia") {
        superrufunc(amount);
    } else if (country == "Norvegia") {
        supernrfunc(amount);
    }
}
function superrufunc(amount) {
    if (amount >= 12000) {
        return (amount / 100) * 87;
    } else {
        return amount;
    }
}
function superrufunc(amount) {
    if (amount >= 12000) {
        return amount;
    } else if (amount <= 100000 && amount > 12000) {
        return (amount / 100) * 90;
    } else if (amount > 100000) {
        return (amount / 100) * 67;
    }
}
